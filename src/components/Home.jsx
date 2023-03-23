import React, { useEffect } from "react";
import AutoTyping from "../bigFunctions/autotyping.min";

const Home = ({ description }) => {

  const exampleText = [
    "I am Davronbek Orifjonov.",
    "I am a Front-End Developer.",
  ];
  
  useEffect(() => {
    const exampleTyping = new AutoTyping(".typeWriter-wrapper", exampleText, {
      typeSpeed: 120,
      deleteSpeed: 60,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
    });
    exampleTyping.start();
  }, [])

  return (
    <section id="home">
      <div className="home-wrap">
        <div className="home-mask opacity-5 bg--dark"></div>
        <div className="home-bg"></div>
        <div className="home-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <div className="typeWriter">
                    <span
                      ref={description}
                      className="typeWriter-wrapper"
                    ></span>
                    <span className="typeWriter-cursor">|</span>
                  </div>
                </h2>
                <p className="text-5 text-light mb-4">based in Rome, Italy.</p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
