import React from "react";

const Navbar = ({ handleNavbar, navbarCollapse, btnCollapser }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-0 d-lg-none">
      <div className="container-fluid g-0">
        <div className="container-fluid d-flex align-items-center justify-content-between p-3 bg--dark">
          <a className="navbar-brand text-5 text-white" href="#">
            Davronbek Orifjonov
          </a>
          <div className="d-flex align-items-center">
            <a
              className="bi bi-github me-4 text-white-50"
              target="_blank"
              data-tippy-content="Github"
              data-tippy-placement="top"
              href="https://github.com/Davronbek25"
            ></a>
            <a
              className="bi bi-linkedin me-4 text-white-50"
              target="_blank"
              data-tippy-content="LinkedIn"
              data-tippy-placement="top"
              href="https://www.linkedin.com/in/orifjonov"
            ></a>
            <button
              ref={btnCollapser}
              className="navbar-toggler collapsed d-flex flex-column justify-content-around d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
          </div>
        </div>
        <div
          className="collapse navbar-collapse any"
          ref={navbarCollapse}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-lg-none me-auto mb-2 mb-lg-0">
            <li className="nav-item pt-3 px-3">
              <a
                id="navbar-1"
                className="nav-link pb-1 active"
                aria-current="page"
                href="#home"
                onClick={(e) => handleNavbar(e)}
              >
                Home
              </a>
              <hr className="text-white-50 mb-1 mt-1" />
            </li>
            <li className="nav-item px-3">
              <a
                id="navbar-2"
                className="nav-link py-1"
                href="#about"
                onClick={(e) => handleNavbar(e)}
              >
                About Me
              </a>
              <hr className="text-white-50 mb-1 mt-1" />
            </li>
            <li className="nav-item px-3">
              <a
                id="navbar-3"
                className="nav-link py-1"
                href="#resume"
                onClick={(e) => handleNavbar(e)}
              >
                Resume
              </a>
              <hr className="text-white-50 mb-1 mt-1" />
            </li>
            <li className="nav-item px-3">
              <a
                id="navbar-4"
                className="nav-link py-1"
                href="#portfolio"
                onClick={(e) => handleNavbar(e)}
              >
                Projects
              </a>
              <hr className="text-white-50 mb-1 mt-1" />
            </li>
            <li className="nav-item px-3 pb-3">
              <a
                id="navbar-5"
                className="nav-link pt-1"
                href="#contact"
                onClick={(e) => handleNavbar(e)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
