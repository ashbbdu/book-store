import React, { useState } from "react";
import OtpInput from 'react-otp-input';
import {useSelector} from "react-redux";

const OtpForm = () => {
  const {signupData} = useSelector((state) => state.auth);
  console.log(signupData, "signupdata");
  const [otp, setOtp] = useState('');
  console.log(otp , "otp")
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
        <form style={{ width: "100%" }}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
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
