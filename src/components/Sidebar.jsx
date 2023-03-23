import { useRef, useState } from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  const homeRef = useRef();
  return (
    <div className="d-lg-flex d-sm-none flex-column align-items-center align-items-sm-start text-white h-100">
      <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
        {/* Logo */}
        <Link
          smooth
          duration={500}
          style={{ cursor: "pointer" }}
          to="home"
          className="mb-lg-auto mt-lg-4 text-center"
        >
          <span
            className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block"
            style={{ width: "176px" }}
          >
            <img
              className="img-fluid rounded-pill d-block"
              src="./imgs/fotor_2023-3-19_17_10_19.png"
              title="I'm Davronbek"
              alt="profile"
            />
          </span>
          <h1 className="text-5 text-white text-center mb-0 d-lg-block">
            Davronbek Orifjonov
          </h1>
        </Link>
        {/* Logo End */}
        <div
          id="header-nav"
          className="d-flex justify-content-center show navbar-collapse w-100 my-lg-auto"
        >
          <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
            <li className="nav-item mb-2">
              <Link
                target={homeRef}
                className="nav-link "
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy
                to="home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                className="nav-link "
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy
                to="about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                className="nav-link "
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy
                to="resume"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                className="nav-link "
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy
                to="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                className="nav-link "
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
          <li
            className="social-icons-facebook"
            data-tippy-content="Facebook"
            data-tippy-placement="top"
          >
            <a
              href="https://www.facebook.com/daveick.joe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li
            className="social-icons-twitter"
            data-tippy-content="Twitter"
            data-tippy-placement="top"
          >
            <a
              href="https://mobile.twitter.com/Daveick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li
            className="social-icons-linkedin"
            data-tippy-content="LinkedIn"
            data-tippy-placement="top"
          >
            <a
              href="https://www.linkedin.com/in/orifjonov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin" />
            </a>
          </li>
          <li
            className="social-icons-github"
            data-tippy-content="Github"
            data-tippy-placement="top"
          >
            <a
              href="https://github.com/Davronbek25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
