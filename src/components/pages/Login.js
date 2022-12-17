import React, { useState } from "react";

import { useNavigate, Link, Navigate } from "react-router-dom";
function Login() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  console.log(auth);
  const loginHandler = async (event) => {
    setErr(null);
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    if (email && password !== "") {
      const submit_data = await fetch("http://localhost:3005/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await submit_data.json();
      console.log(result);
      if (submit_data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result);
        navigate("/");
      } else {
        setErr(result.message);
      }
    }
  };
  return (
    <div class="formSection main">
    {auth?<Navigate to = "/"/>:
    <>
    
        <div class="container">
          <div class=" headings text-center">
            <h1>Login</h1>
            {err ? <span className="text-danger danger-text">{err}</span> : ""}
          </div>
          <div class="row mt-4">
            <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
              <form id="makeTodo" onSubmit={loginHandler}>
                <div class="form-group mt-5">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>

                <div class="form-group mt-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="form-button d-flex justify-content-center mt-5">
                  <button type="submit" class="btn btn-info p-2">
                    Login
                  </button>
                </div>
                <div class="form-button d-flex justify-content-center mt-3">
                  <span style={{ marginRight: "10px" }}>
                    Don't have Account
                  </span>
                  <Link type="submit" className="text-primary" to="/signup">
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </> 
    } 
    </div>
  );
}

export default Login;
