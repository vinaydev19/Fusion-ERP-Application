import { User } from "../models/user.model.js";
import { uploadOncloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

// global variable
const option = {
  httpOnly: true,
  secure: true,
};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// methods

const generateAccessAndRefreshToken = async function (userId) {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something want wrong while generate access and refresh token"
    );
  }
};

// controllers

const userRegister = asyncHandler(async (req, res) => {
  // get data for user
  // validate data
  // check if user is already register or not
  // upload profile image on cloudinary
  // create user
  // remove field password and refresh token then send data to frontend

  const { fullName, username, email, phoneNo, companyName, password } =
    req.body;

  console.table([fullName, username, email, phoneNo, companyName, password]);

  if (
    [fullName, username, email, phoneNo, companyName, password].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(403, "all field are required");
  }

  const foundExistUser = await User.findOne({ email });

  if (foundExistUser) {
    throw new ApiError(403, "user is already exist on this email id");
    // return res.status(401).json({
    //   message: "User already exist.",
    //   success: false,
    // });
    // return res.status(401).json(new ApiError(401, null,"user already exist"));
  }

  const profilePicLocalPath = req.file?.path;

  console.log(req.files);

  if (!profilePicLocalPath) {
    throw new ApiError(400, "please upload profile pic");
  }

  const cloudinaryProfilePic = await uploadOncloudinary(profilePicLocalPath);

  if (!cloudinaryProfilePic) {
    throw new ApiError(400, "something want wrong while upload profile pic");
  }

  const user = await User.create({
    fullName,
    username,
    email,
    phoneNo,
    companyName,
    password,
    profilePic: cloudinaryProfilePic.url,
  });

  const loggedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!loggedUser) {
    throw new ApiError(500, "something want wrong while register the user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { loggedUser }, "user register successfully"));
});

const userLogin = asyncHandler(async (req, res) => {
  // get data for frontend
  // validate data
  // find user
  // check the password is correct or not
  // generate accesss and refresh token

  const { email, username, password } = req.body;

  if (!password) {
    throw new ApiError(403, "password field are required");
  }
  if (!username && !email) {
    throw new ApiError(400, "username or email is required");
  }
  if (!emailRegex.test(email)) {
    throw new ApiError(403, "please enter valid email");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    throw new ApiError(
      400,
      "user not found please enter correct email or username"
    );
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(400, "password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new ApiResponse(
        200,
        { user: loggedUser, accessToken, refreshToken },
        "user login successfully"
      )
    );
});

const userLogout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new ApiResponse(200, {}, "user logout successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // get refresh token for user cookie
  // decode the token and get userid
  // find user in db
  // check token for cookie and token for db
  // generate the access and refresh token
  // set new access and refresh token to user cookie

  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodeToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!decodeToken) {
      throw new ApiError(401, "Invalid refresh token");
    }

    const user = await User.findById(decodeToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "refreshToken is expired or used");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", newRefreshToken, option)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "new refresh generate successfully"
        )
      );
  } catch (error) {}
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  // get old and new and confirm password for user
  // validate the password
  // check new and confirm password are same or not
  // check old password enter by user and old password by db both are same or not
  // save new password on db

  const { oldPassword, newPassword, confirmPasswrod } = req.body;

  if (
    [oldPassword, newPassword, confirmPasswrod].some((field) => field === "")
  ) {
    throw new ApiError(403, "all field are required");
  }
  if (newPassword !== confirmPasswrod) {
    throw new ApiError(403, "password and confirmPasswrod should same");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(401, "unauthorized, request");
  }

  const isPasswordValidate = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordValidate) {
    throw new ApiError(403, "old password incorrect");
  }

  user.password = newPassword;

  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "password has been changed"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullName, username, email, phoneNo, companyName } = req.body;

  if (
    [fullName, username, email, phoneNo, companyName].every(
      (field) => field === undefined || field === null || field.trim() === ""
    )
  ) {
    throw new ApiError(403, "At least one field is required to update");
  }

  console.table([fullName, username, email, phoneNo, companyName]);

  const updateData = {};

  if (fullName) updateData.fullName = fullName;
  if (username) updateData.username = username;
  if (email) updateData.email = email;
  if (phoneNo) updateData.phoneNo = phoneNo;
  if (companyName) updateData.companyName = companyName;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: updateData,
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user }, "account details are updated successfully")
    );
});

const profilePicUpdate = asyncHandler(async (req, res) => {
  const profilePicLocalPath = req.file?.path;

  if (!profilePicLocalPath) {
    throw new ApiError(403, "profile Pic is required");
  }

  const cloudinaryProfilePic = await uploadOncloudinary(profilePicLocalPath);

  if (!cloudinaryProfilePic) {
    throw new ApiError(403, "something want wrong while upload profile Pic");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        profilePic: cloudinaryProfilePic.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "profile Pic is update successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User fetched successfully"));
});

export {
  userRegister,
  userLogin,
  userLogout,
  refreshAccessToken,
  changeCurrentPassword,
  updateAccountDetails,
  profilePicUpdate,
  getCurrentUser,
};
