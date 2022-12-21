import React, { useState } from "react";
import "./auth.css";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  console.log(auth);
  // Login Handler

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
      // console.log(result);
      if (submit_data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
        console.log(result);
        navigate("/");
      } else {
        setErr(result.message);
      }
    }
  };
  return (
    <div class="mt-5">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-10 offset-lg-4 offset-md-3 offset-1 formSection">
          <div class="container mb-5">
            <div class=" headings text-center mt-5">
              <h1>Login</h1>
            </div>
            {err && <span>Error Message</span>}
            <form id="makeTodo" onSubmit={loginHandler}>
              <div class="form-group d-flex flex-row align-items-end">
              <AiOutlineMail className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem", marginBottom:"1%"}}/>
                <input
                  type="email"
                  name="email"
                  class="form-control  input" 
                  placeholder="Email address"
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <RiLockPasswordLine className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem", marginBottom:"1%"}}/>
                <input
                  type="password"
                  name="password"
                  className="form-control input"
                  placeholder="Password"
                />
              </div>
              <div class="form-button d-flex justify-content-center mt-5 ">
                <button type="submit" class="btn btn-info auth-button">
                  Login
                </button>
              </div>
              <div class="form-button d-flex justify-content-center mt-5">
                <span style={{ marginRight: "10px" }}>Don't have Account</span>
                <Link type="submit" className="text-primary" to="/signup">
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
