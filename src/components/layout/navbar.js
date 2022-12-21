/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./layout.css";
import { Outlet, Link} from "react-router-dom";
function Navbar() {
  const auth = localStorage.getItem("user");
  console.log(auth);
  // const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    // navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <Link className="navbar-brand text-uppercase pl-2 pr-2" to="/">
            Exercise Tracker
          </Link>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                  <img
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                    alt=""
                    className="rounded-circle  "
                    onClick={logout}
                  />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet className = "mt-5"/>
    </>
  );
}

export default Navbar;
