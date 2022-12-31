 
import React from "react";
import { Outlet, Link, useNavigate} from "react-router-dom";
function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  let chars = JSON.parse(auth)?.name;
  var matches = chars?.match(/\b(\w)/g);
  var avatar = matches?.join('');
  console.log(avatar);
  const logout = () => {
    localStorage.clear();
     navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container d-flex align-items-center">
          <Link className="navbar-brand text-dark text-uppercase pl-2 pr-2" to="/">
            Exercise Tracker
          </Link>
          <div
            className="d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex align-items-center flex-row justify-content-between">
              {auth?
              <>
              <li className="mr-5"> <h4>{JSON.parse(auth)?.name}</h4></li>
              <li className="nav-item dropdown" role="button">
                  <button className="btn btn-primary btn-lg rounded-circle" type="button" id="dropdownMenuButton" aria-haspopup="true"  data-toggle="dropdown" aria-expanded="false">
                   <span className="text-uppercase">{avatar}</span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="btn dropdown-item text-danger font-weight-bold" onClick={logout}>Logout</button>
                  </div>
              </li>
              
              </>:
              <>
              <li className="nav-item ">
                <h4><Link to = "/login">Login</Link></h4>
              </li>
              <li className="nav-item pl-5">
                <h4><Link to = "/signup">Signup</Link></h4>
              </li>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
      <Outlet className = "mt-5"/>
    </>
  );
}

export default Navbar;
