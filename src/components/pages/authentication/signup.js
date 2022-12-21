import React, { useState } from "react";
import "./auth.css";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsFillPersonFill, BsFillImageFill} from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
function Signup() {
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
        <div class="col-lg-4 col-md-6 col-10 offset-lg-4 offset-md-3 offset-1 formSection2">
          <div class="container">
            <div class=" headings text-center mt-5">
              <h1>Signup</h1>
            </div>
            {err && <span>Error Message</span>}
            <form id="makeTodo" onSubmit={loginHandler}>
              <div class="form-group d-flex flex-row align-items-end">
              <BsFillPersonFill className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text"
                  name="name"
                  class="form-control  signup" 
                  placeholder="Email address"
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <AiOutlineMail className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text"
                  name="email"
                  class="form-control  signup" 
                  placeholder="Email address"
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <BsFillImageFill className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="file"
                  name="photo"
                  class="form-control  signup" 
                  accept=".jpg,.png,.gif"
                  placeholder="Profile Picture"  
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <RiLockPasswordLine className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="password"
                  name="password"
                  className="form-control signup"
                  placeholder="Password"
                />
              </div>
              <div class="form-button d-flex justify-content-center mt-4 ">
                <button type="submit" class="btn btn-info auth-button">
                  Signup
                </button>
              </div>
              <div class="form-button d-flex justify-content-center mt-3">
                <span style={{ marginRight: "10px" }}>Already have Account</span>
                <Link type="submit" className="text-primary" to="/login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
