import React, { useState } from "react";
import { Navigate, useNavigate,Link } from "react-router-dom";
function Signup() {
  const auth = localStorage.getItem("user");
  console.log(auth);
  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  const sighnupHandler = async (event) => {
    setErr(null);
    event.preventDefault();
    let email = event.target.email.value;
    let name = event.target.name.value;
    let password = event.target.password.value;
    let phone = event.target.phone.value;
    if (email && name && password && phone !== "") {
      const submit_data = await fetch("http://localhost:3005/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          phone,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await submit_data.json();
      console.log(result);
      if (submit_data.status === 200) {
        console.log(result);
        navigate("/login");
      } else {
        setErr(result.message);
      }
    }
  };
  return (
    <div class="formSection main">
    {!auth?<>
        <div class="container">
          <div class=" headings text-center">
            <h1>Sign Up</h1>
            {err ? <span className="text-danger danger-text">{err}</span> : ""}
          </div>
          <div class="row mt-4">
            <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
              <form id="makeTodo" onSubmit={sighnupHandler}>
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name..."
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="form-button d-flex justify-content-center mt-3">
                  <button type="submit" class="btn btn-info p-2">
                    Sign Up
                  </button>
                </div>
                <div class="form-button d-flex justify-content-center mt-3">
                  <span style={{marginRight:"10px"}}>already have account?</span>
                  <Link type="submit" to = "/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>:
      <Navigate to = '/'/>
    } 
    </div>
  );
}

export default Signup;
