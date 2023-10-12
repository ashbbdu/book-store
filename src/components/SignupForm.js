import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setSignupData } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { sendOtp } from "../services/operations/authApis";

const SignupForm = () => {
 const navigate = useNavigate()    // if password match to move to opt screen else toast
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verifyPassword: "",
    },
  });


  const submitHandler = async ( data) => {
    const { firstName ,  lastName , email , password  } = data;

       sendOtp(email , navigate , dispatch)
        dispatch(setSignupData({firstName , lastName ,email , password}))
     
 
    
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
        <form
          className="w-100"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Register
          </h3>
          <div className="mb-2">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          <div className="mb-2">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              required
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-danger">This field is required</p>
            )}
          </div>

          <button className="btn btn-info w-100 my-4" type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
