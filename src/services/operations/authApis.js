import { toast } from "react-hot-toast";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../store/slices/authSlice";
import apiServices from "../apiServices";

export const sendOtp =  (email, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const sendOpt = await apiServices.httpPost(endpoints.SENDOTP_API, {
        email,
      });
      console.log(sendOpt , "otp")
      if (sendOpt.success) {
       
        toast.success(sendOpt.message);
        navigate("/verify-account");
        dispatch(setLoading(false));
      } else {
        toast.error(sendOpt.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  }

};

export const signup = (
  firstName,
  lastName,
  email,
  password,
  otp,
  navigate,
  dispatch
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const createAcc = await apiServices.httpPost(endpoints.SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        otp,
      });
      if (createAcc.success) {
        navigate("/");
        toast.success(createAcc.message);
      } else {
        toast.error(createAcc.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpPost(endpoints.LOGIN_API, {
        email,
        password,
      });
      if (response.success) {
        dispatch(setToken(response.token))
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        localStorage.setItem("profilePic" , response.user.profilePicture)
        navigate("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
     toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};


export const logout = (navigate) => {
  return async (dispatch) => {
    try { 
      dispatch(setToken(null))
      localStorage.removeItem("token")
      localStorage.removeItem("profilePic")
      toast.success("Logged out successfully !")
      navigate("/")
    } catch (error) {
      toast.error("Some thing went wrong")
    }
  }
}