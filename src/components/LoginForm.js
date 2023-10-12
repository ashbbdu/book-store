import React from "react";

const LoginForm = () => {
  return (
    <>
      <div class="px-5 ms-xl-4">
        <i
          class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
          style={{ color: "#709085" }}
        ></i>
        <span class="h1 fw-bold mb-0">Logo</span>
      </div>

      <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
        <form style={{ width: "100%" }}>
          <h3 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Log in
          </h3>

          <div class="form-outline mb-4">
          <label class="form-label" for="form2Example18">
              Email address
            </label>
            <input
              type="email"
              id="form2Example18"
              class="form-control form-control-lg"
            />
          
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form2Example28">
              Password
            </label>
            <input
              type="password"
              id="form2Example28"
              class="form-control form-control-lg"
            />
            
          </div>

          <div class="pt-1 mb-4">
            <button class="btn btn-info btn-lg btn-block" type="button">
              Login
            </button>
          </div>

          <p class="small mb-5 pb-lg-2">
            <a class="text-muted" href="#!">
              Forgot password?
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a href="#!" class="link-info">
              Register here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
