

const BASE_URL = "http://localhost:4000/api/v1"
// Auth Endpoints
export const endpoints = {
    SENDOTP_API: BASE_URL +  "/auth/send-otp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API:BASE_URL +  "/auth/reset-password-token",
    RESETPASSWORD_API:  BASE_URL +"/auth/reset-password",
  }