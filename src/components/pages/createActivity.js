import React,{useState} from 'react'
import './authentication/auth.css' 
import {CgNametag} from 'react-icons/cg';
import {BiTime,BiTimeFive} from 'react-icons/bi';
import {BsFillCalendar2DateFill} from 'react-icons/bs';
import { useNavigate} from "react-router-dom";
function CreateActivity() {
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
    <div>
          <div class="mt-5">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-10 offset-lg-4 offset-md-3 offset-1 create-form">
          <div class="container">
            <div class=" headings text-center mt-5">
              <h1>Create Activity</h1>
            </div>
            {err && <span>Error Message</span>}
            <form id="makeTodo" onSubmit={loginHandler}>
              <div class="form-group d-flex flex-row align-items-end">
              <CgNametag className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="text"
                  name="name"
                  class="form-control  signup" 
                  placeholder="Name..."
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <BiTime className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="time"
                  name="start_time"
                  class="form-control  signup" 
                  placeholder="Starting Time..."
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <BiTimeFive className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="time"
                  name="email"
                  class="form-control  signup" 
                  placeholder="End Time"
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
              <BsFillCalendar2DateFill className="position-absolute text-muted d-flex pl-3" 
              style={{fontSize:"3rem"}}/>
                <input
                  type="date"
                  name="date"
                  class="form-control  signup" 
                  placeholder="Profile Picture"  
                />
              </div>
              <div class="form-group d-flex flex-row align-items-end">
                <textarea
                 rows="4"
                 cols="50"
                  className="form-control textarea"
                  placeholder="Enter Details..."
                ></textarea>
              </div>
              <div class="form-button d-flex justify-content-center mt-4 ">
                <button type="submit" class="btn btn-info auth-button">
                  Create
                </button>
              </div>
               
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateActivity
