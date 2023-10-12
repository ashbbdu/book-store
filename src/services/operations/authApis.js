import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setLoading } from "../../store/slices/authSlice";
import apiServices from "../apiServices";

export const sendOtp = async (email, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    const sendOpt = await apiConnector("POST", endpoints.SENDOTP_API, {
      email,
    });

    if (sendOpt.data.success) {
      toast.success(sendOpt.data.message);
      navigate("/verify-account");
      dispatch(setLoading(false));
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
  }
};

// export const signup = async (
//   firstName,
//   lastName,
//   email,
//   password,
//   otp,
//   navigate,
//   dispatch
// ) => {
//   dispatch(setLoading(true));
//   try {
//     const signUp = await apiConnector("POST", endpoints.SIGNUP_API, {
//       firstName,
//       lastName,
//       email,
//       password,
//       otp,
//     });

//     // const signUp = await apiServices.httpPost("/auth/signup", {
// firstName,
// lastName,
// email,
// password,
//     //     otp,
//     // })

//     console.log(signUp, "sigup data ========>");
//     if (signUp.data.success) {
//       toast.success(signUp.data.message);
//       dispatch(setLoading(false));
//       navigate("/");
//     }
//     console.log("exit");
//   } catch (error) {
//     dispatch(setLoading(false));
//     toast.error(error?.response?.data?.message);
//   }
// };

export const signup = async (  firstName,
    lastName,
    email,
    password,
    otp,
    navigate,
    dispatch
    ) => {
        dispatch(setLoading(true))
  try {
    const createAcc = await apiConnector("POST", endpoints.SIGNUP_API, {
      firstName,
      lastName,
      email,
      password,
      otp,
      
    });
    console.log(createAcc, "created");
    if (createAcc.data.success) {
      navigate("/");

    }
  } catch (error) {
    console.log(error, "errors");
  }
  dispatch(setLoading(true))
};

export const login = async (email, password, navigate , dispatch) => {
    dispatch(setLoading(true))
  try {
    const login = await apiConnector("POST", endpoints.LOGIN_API, {
      email,
      password,
    });
    if (login.data.success) {
      navigate("/dashboard");
      localStorage.setItem("token" , login.data.token)
    }
    console.log(login.data.success, "response");
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading(false))
};
