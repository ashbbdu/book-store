import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setLoading } from "../../store/slices/authSlice";

export const sendOtp = async (email, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    const sendOpt = await apiConnector("POST", endpoints.SENDOTP_API, {
      email,
    });

    if (sendOpt.data.success) {
      toast.success(sendOpt.data.message);
      navigate("/verify-account");
      return sendOpt.data.data;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
  dispatch(setLoading(false));
};

export const login = async (email, password, navigate) => {
  try {
    const login = await apiConnector("POST", endpoints.LOGIN_API, {
      email,
      password,
    });
    if (login.data.success) {
      navigate("/signup");
    }
    console.log(login.data.success, "response");
  } catch (error) {
    console.log(error);
  }
};

// export const signup = async (firstName , lastName , email , password , confirmPassword , otp) {
//     try {

//     } catch(error){

//     }
// }
