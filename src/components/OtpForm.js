import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";
import { signup } from "../services/operations/authApis";
import { setLoading } from "../store/slices/authSlice";

const OtpForm = () => {
  const { signupData } = useSelector((state) => state.auth);
  const { firstName, lastName, email, password } = signupData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signup(firstName, lastName, email, password, otp, navigate));
  };

  // useEffect(() => {
  //   if(signupData === null) {
  //     navigate("/")
  //   }
  // },[signupData])

  return (
    <>
      <div className="px-5 ms-xl-4">
        <i
          className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
          style={{ color: "#709085" }}
        ></i>
        <span className="h1 fw-bold mb-0">Logo</span>
      </div>

      <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 otp-input">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
          />
          <div className="pt-1 my-4 d-flex justify-content-center ">
            <button className="btn btn-info w-50 " type="submit">
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpForm;
