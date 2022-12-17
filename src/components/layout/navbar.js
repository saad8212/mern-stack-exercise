import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white bg-dark">
        <div className="container">
          <Link className="navbar-brand text-uppercase pl-2 pr-2" to="/">
            {JSON.parse(auth)?.name}
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            =
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            {auth ? (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/create-product">
                      Create Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to="/signup">
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
