import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../store/slices/authSlice";
import apiServices from "../apiServices";

export const sendOtp = async (email, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    const sendOpt = await apiServices.httpPost(endpoints.SENDOTP_API, {
      email,
    });

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
      console.log(createAcc, "created");
      if (createAcc.success) {
        navigate("/");
        toast.success(createAcc.message);
      } else {
        toast.error(createAcc.message);
      }
    } catch (error) {
      console.log(error, "errors");
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
      console.log(response.token, "login");
      if (response.success) {
        dispatch(setToken(response.token))
        toast.success(response.message);
        
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};


export const logout = (navigate) => {
  return async (dispatch) => {
    try { 
      dispatch(setToken(null))
      localStorage.removeItem("token")
      toast.success("Logged out successfully !")
      navigate("/")
    } catch (error) {
      toast.error("Some thing went wrong")
    }
  }
}