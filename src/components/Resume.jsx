import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section bg-dark-2">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-uppercase fw-600 w-100 mb-0 text-white-50 opacity-1">
            Summary
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-white">
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">
              My Education(Uzbekistan)
            </h2>
            <div className="rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2011 - 2016</p>
              <h3 className="text-5 text-white">Exact Sciences</h3>
              <p className="text-primary">Fourth Specialized Boarding School</p>
              <p className="mb-0 text-white-50">
                Advanced education in mathematics, physics, and computer science
                for highly motivated students. With access to experienced
                faculty and state-of-the-art labs, students engage deeply in
                theoretical and practical STEM learning.
              </p>
            </div>
            <div className="rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2016 - 2019</p>
              <h3 className="text-5 text-white">Automation</h3>
              <p className="text-primary">
                Electro Technical Professional College
              </p>
              <p className="mb-0 text-white-50">
                The main objective of the program is to teach control measuring
                instruments and automation.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">
              My Education(Italy)
            </h2>
            <div className="rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2019 - 2023</p>
              <h3 className="text-5 text-white">Engineering Sciences</h3>
              <p className="text-primary">University of Rome Tor Vergata</p>
              <p className="mb-0 text-white-50">
                BESc program aims to equip students with a solid foundation in
                theoretical concepts, problem-solving skills, and hands-on
                experience through laboratory work, design projects, and
                internships.
              </p>
            </div>
            <div className="rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2024 - Present</p>
              <h3 className="text-5 text-white">Computer Science</h3>
              <p className="text-primary">University of Genova</p>
              <p className="mb-0 text-white-50">
                Advanced program that builds on foundational knowledge to deepen
                expertise in areas such as algorithms, data structures, machine
                learning, artificial intelligence, software engineering, and
                cybersecurity.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-6 fw-600 my-4 text-white">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              Web Design
              <span className="float-end">65%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              HTML/CSS
              <span className="float-end">75%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              JavaScript
              <span className="float-end">80%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              React JS
              <span className="float-end">70%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              REST APIs
              <span className="float-end">67%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={67}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "67%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="fw-500 text-start mb-2 text-light">
              Bootstrap
              <span className="float-end">85%</span>
            </p>
            <div className="progress progress-sm mb-4 bg--dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemax={100}
                aria-valuemin={0}
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            href="./imgs/dave_cv.pdf"
            target="_blank"
            download
            className="btn btn-outline-secondary rounded-pill shadow-none"
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
