import React, { useState } from "react";
import "./authentication/auth.css";
import { CgNametag,CgSelectR } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function CreateActivity() {
  const [err, setErr] = useState(null);
  const [name, setName] = useState();
  const [duration, setDuration] = useState(); 
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const activityHandler = async (event) => {
    setErr(null);
    event.preventDefault();
    if (!name || !type || !description || !date || !duration) {
      setErr(true);
      console.log("error");
      return false;
    }
    console.log(name, type, description, date, duration);
    const submit_data = await fetch("http://localhost:3005/activity", {
      method: "POST",
      body: JSON.stringify({
        name,
        type,
        description,
        date,
        duration,
        userId: JSON.parse(auth)?._id,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    const result = await submit_data.json();
    console.log("result", result);
    if (submit_data.status === 200) {
      console.log(result) ;
      navigate("/");
    } else {
      console.log(result);
    }
  };

  return (
    <div>
      <div class="mt-3">
        <div class="row">
          <div class="col-lg-4 col-md-10 col-10 offset-lg-4 offset-md-1 offset-1 create-form">
            <div class="container">
              <div class=" headings text-center mt-3">
                <h1>Create Activity</h1>
              </div>

              <form id="makeTodo" onSubmit={activityHandler}>
                <div class="form-group d-flex flex-row align-items-end">
                  <CgNametag
                    className="position-absolute text-muted d-flex pl-3"
                    style={{ fontSize: "3rem" }}
                  />
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    class="form-control  signup"
                    placeholder="Name..."
                  />
                </div>
                {err && !name && (
                  <span className="text-danger">"Name is not valid"</span>
                )}
                 <div class="form-group d-flex flex-row align-items-end select">
                  <CgSelectR
                    className="position-absolute text-muted d-flex pl-3"
                    style={{ fontSize: "3rem" }}
                  />
                  <select onChange={(e) =>setType(e.target.value)} 
                    className="form-select  signup text-muted border" 
                  >
                    <option selected>Select Activity Type...</option>
                    <option value="running">Running</option>
                    <option value="swimming">Swimming</option>
                    <option value="cycling">Cycling</option>
                    <option value="jumping">Jumping</option>
                    <option value="walking">Walking</option>
                    <option value="hiking">Hiking</option>
                  </select>
                </div>
                <div class="form-group d-flex flex-row align-items-end">
                  <BiTime
                    className="position-absolute text-muted d-flex pl-3"
                    style={{ fontSize: "3rem" }}
                  />
                  <input
                    type="text"
                    onChange={(e) => setDuration(e.target.value)}
                    class="form-control  signup"
                    placeholder="Duration in Minutes..."
                  />
                </div>
                {err && !duration && (
                  <span className="text-danger">"duration is required"</span>
                )}
                 
                <div class="form-group d-flex flex-row align-items-end">
                  <BsFillCalendar2DateFill
                    className="position-absolute text-muted d-flex pl-3"
                    style={{ fontSize: "3rem" }}
                  />
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    class="form-control  signup"
                    placeholder="Date..."
                  />
                </div>
                {err && !date && (
                  <span className="text-danger">"date is required"</span>
                )}

                <div class="form-group d-flex flex-row align-items-end">
                  <textarea
                    rows="4"
                    cols="50"
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control textarea"
                    placeholder="Enter Details..."
                  ></textarea>
                </div>
                {err && !description && (
                  <span className="text-danger">"details is required"</span>
                )}
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
  );
}

export default CreateActivity;
