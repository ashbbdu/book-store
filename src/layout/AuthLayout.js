import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import OtpForm from "../components/OtpForm";

import SignupForm from "../components/SignupForm";

const AuthLayout = () => {
  const location = useLocation();
  console.log(location.pathname, "parms");
  return (
    <section className="vh-100 main-section">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-6 text-black">
            {location.pathname === "/" ? (
              <LoginForm />
            ) : location.pathname === "/signup" ? (
              <SignupForm />
            ) : (
              <OtpForm />
            )}
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://img.freepik.com/free-vector/book-store_53876-16926.jpg?w=1060&t=st=1697101551~exp=1697102151~hmac=004e6b43c4049a66d31482a97db84cf35b35733b01e9c254526c55aedb0802a3"
              alt="Login image"
              className="w-100 vh-100 image-fluid"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>

    // </div>
  );
};

export default AuthLayout;
