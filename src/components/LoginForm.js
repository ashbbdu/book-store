import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/operations/authApis";
import {useDispatch} from "react-redux"

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData, "formdata");

  const onChangeHander = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData, "fd");
    // API Call here
    const {email , password} = formData;
    login(email , password , navigate , dispatch)

  };

  return (
    <>
      <div className="px-5 ms-xl-4">
        <i
          className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
          style={{ color: "#709085" }}
        ></i>
        <span className="h1 fw-bold mb-0">Logo</span>
      </div>

      <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
        <form style={{ width: "100%" }} onSubmit={submitHandler}>
          <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Log in
          </h3>

          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={onChangeHander}
            />
          </div>

          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={onChangeHander}
            />
          </div>

          <div className="pt-1 my-4">
            <button className="btn btn-info w-100 " type="submit">
              Login
            </button>
          </div>

    
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="link-info">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
