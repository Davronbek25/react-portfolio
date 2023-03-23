import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-dark-1">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-uppercase fw-600 w-100 mb-0 text--muted opacity-1">
            About Me
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-white">
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 text-white">
              I'm
              <span className="text-primary"> Davronbek Orifjonov, </span>
              a Web Developer
            </h2>
            <p className="text-white-50">
              Front-End Developer with a proven ability to collaborate
              effectively with senior developers while spending extra time to be
              mentored. Enjoy working closely with team members to ensure
              workloads are effectively redirected to bottlenecks and personal
              picking up the slack when necessary.
            </p>
            <p className="text-white-50">
              With a passion for both personal growth and for software
              development, ready to apply my passion for coding to talented
              engineering team to develop quality solutions.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
                <ul className="list-style-2 list-style-light text-light">
                    <li>
                        <span className="fw-600 me-2">Name:</span>
                        Davronbek Orifjonov
                    </li>
                    <li>
                        <span className="fw-600 me-2">Email:</span>
                        <a href="mailto:daveickjob@gmail.com">
                            daveickjob@gmail.com
                        </a>
                    </li>
                    <li>
                        <span className="fw-600 me-2">Age:</span>
                        22
                    </li>
                    <li className="border-0">
                        <span className="fw-600 me-2">From:</span>
                        Rome, Italy
                    </li>
                </ul>
                <a href="./imgs/dave_cv.pdf" target="_blank" className="btn btn-primary rounded-pill"> 
                    View CV
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
