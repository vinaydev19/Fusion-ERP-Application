import { getMyProfile } from "@/redux/userSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMyProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyPrfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/current-user`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getMyProfile(res?.data.data));
      } catch (error) {
        console.log(`error on get user profile || ${error} `);
        console.log(error);
      }
    };
    fetchMyPrfile();
  }, [dispatch]);
};

export default useMyProfile;
