import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container">
          <img src={logo} alt="" />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-danger"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tracking">
                  Tracking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <a href="/contact" className="btn btn-danger">
              Request a Quote
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
