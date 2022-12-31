import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./auth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdContactPhone} from 'react-icons/md';
import { Link} from "react-router-dom";
function Signup() {
  const [err, setErr] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();  
  const [phone, setPhone] = useState();  
  const auth = localStorage.getItem("user");
  let navigate = useNavigate();
  // Signup Function

   
  
  const signupHandler = async (event) => {
    setErr(null);
    event.preventDefault();
     
    if (email && password && name && phone) {
      const register = await fetch("http://localhost:3005/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          password
        }),
        headers: { "Content-Type": "application/json" },
      });
      let result = await register.json();
      if(register.status === 200) {
        console.log(result);
        var deleteToast = () =>{
          toast.success("User Registered Successfully!",{
            position:"top-center",
            theme: "colored",
            autoClose: 2000,
          });
        }
        deleteToast();
        setTimeout(() => {
          navigate("/login");
     }, 2000);
      } else {
        setErr(result.message);
      }

    };
}
  return (
    <div class="mt-5">
       {auth?<Navigate to = "/"/>:
       <>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-10 offset-lg-4 offset-md-3 offset-1 formSection2">
          <div class="container">
            <div class=" headings text-center mt-5">
              <h1>Signup</h1>
            </div>
            {err && <span>{err}</span>}
            <form id="makeTodo" onSubmit={signupHandler} enctype="multipart/form-data">
              <div class="form-group d-flex flex-row align-items-end">
              <BsFillPersonFill className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text" 
                  class="form-control  signup" 
                  placeholder="Enter Name..."
                  onChange={(e) =>setName(e.target.value)}
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <AiOutlineMail className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text"
                  name="email"
                  class="form-control  signup" 
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <MdContactPhone className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text"
                  name="text"
                  class="form-control  signup" 
                  onChange={(e) =>setPhone(e.target.value)}
                  placeholder="Phone Number"
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
                  onChange={(e) =>setPassword(e.target.value)}
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
      </>} 
      <ToastContainer/>
    </div>
  );
}

export default Signup;
