import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  changeCurrentPassword,
  getCurrectUser,
  profilePicUpdate,
  refreshAccessToken,
  updateAccountDetails,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("profilePic"), userRegister);
router.route("/login").post(userLogin);
router.route("/logout").post(verifyJWT, userLogout);
router.route("/refresh-token").post(verifyJWT, refreshAccessToken);
router.route("/currect-user").get(verifyJWT, getCurrectUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/update-profilepic")
  .patch(verifyJWT, upload.single("profilePic"), profilePicUpdate);

export default router;
