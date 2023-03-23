import { useRef, useState, useEffect } from "react";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import TermsAndConditions from "./components/TermsAndConditions";
import Disclaimer from "./components/Disclaimer";
import Sidebar from "./components/Sidebar";

function App() {
  const description = useRef();
  const navbarCollapse = useRef();
  const btnCollapser = useRef();

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleNavbar = (e) => {
    document
      .querySelectorAll("#navbarSupportedContent .nav-link")
      .forEach((nav) => {
        if (nav.id === e.target.id) {
          if (nav.classList[2] === "active") {
            navbarCollapse.current.classList.remove("show");
            btnCollapser.current.classList.add("collapsed");
          } else {
            navbarCollapse.current.classList.remove("show");
            btnCollapser.current.classList.add("collapsed");
            nav.classList.add("active");
          }
        } else {
          nav.classList.remove("active");
        }
      });
  };

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  tippy('[data-tippy-content]', {
    placement: 'auto',
    theme: 'dark'
  });

  return (
    <>
      <div className="app container-fluid g-0">
        <div className="row g-0">
          <div id="header" className="col col-lg-3 bg--dark g-0">
            <Navbar
              handleNavbar={handleNavbar}
              navbarCollapse={navbarCollapse}
              btnCollapser={btnCollapser}
            />
            <Sidebar />
          </div>
          <div id="main" className="col-12 col-lg-10 ms-lg-auto g-0">
            <Home description={description} />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
            <TermsAndConditions />
            <Disclaimer />
          </div>
        </div>
      </div>
      <span
        id="back-to-top"
        className="rounded-circle"
        data-tippy-content="Back to top"
        style={{ display: scrollTopVisible ? "inline" : "none" }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </span>
    </>
  );
}

export default App;
