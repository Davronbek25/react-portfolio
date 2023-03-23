import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const Portfolio = () => {
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [pointer, setPointer] = useState({ state: false, ind: null });

  const filters = {
    EASY: "Easy",
    MEDIUM: "Medium",
    HARD: "Hard",
  };

  const projectsData = [
    {
      title: "Spotify homepage",
      live: 'https://spotifyning-kloni.netlify.app/',
      github: 'https://github.com/Davronbek25/react-spotify',
      thumbImage: "./imgs/2023-03-16.png",
      categories: [filters.HARD],
    },
    {
      title: "Bootstrap Prime",
      live: 'https://bootstrap-prime.netlify.app/',
      github: 'https://github.com/Davronbek25/B2-K2',
      thumbImage: "./imgs/2023-03-16 (7).png",
      categories: [filters.MEDIUM],
    },
    {
      title: "GOG.com clone",
      live: 'https://gog-kloni.netlify.app/',
      github: 'https://github.com/Davronbek25/B2-K10',
      thumbImage: "./imgs/2023-03-16 (9).png",
      categories: [filters.MEDIUM],
    },
    {
      title: "Travel Agency",
      live: 'https://travelling-agenstva.netlify.app/',
      github: 'https://github.com/Davronbek25/B2-K3',
      thumbImage: "./imgs/2023-03-16 (6).png",
      categories: [filters.EASY],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  useEffect(() => {
    if (pointer.ind !== null) {
      if (pointer.state) {
        document
          .querySelector(".portfolio-item-" + pointer.ind + " .portfolio-image")
          .classList.add("portfolio-img-active");
      } else
        document
          .querySelector(".portfolio-item-" + pointer.ind + " .portfolio-image")
          .classList.remove("portfolio-img-active");
    }
  }, [pointer]);

  return (
    <section id="portfolio" className="section bg-dark-1">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-uppercase fw-600 w-100 mb-0 text--muted opacity-1">
            Portfolio
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-white">
            My Projects
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <ul
          className={
            "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 nav-transparent"
          }
        >
          <li className="nav-item">
            <button
              className={"nav-link " + (filterKey === "*" ? "active" : "")}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </button>
          </li>
          {Object.keys(filters).map((oneKey, i) => (
            <li className="nav-item" key={i}>
              <button
                className={
                  "nav-link " + (filterKey === filters[oneKey] ? "active" : "")
                }
                onClick={handleFilterKeyChange(filters[oneKey])}
              >
                {filters[oneKey]}
              </button>
            </li>
          ))}
        </ul>
        {/* Filter Menu end */}
        <div className="portfolio popup-ajax-gallery">
          <div className="row portfolio-filter filter-container g-4">
            {projectsData.length > 0 &&
              projectsData.map((project, index) => (
                <div
                  className={
                    "col-sm-6 col-lg-4 filter-item " +
                    project.categories.join(" ") +
                    " portfolio-item-" +
                    index
                  }
                  key={index}
                >
                  <div className="portfolio-box rounded">
                    <div className="portfolio-img rounded">
                      <img
                        onLoad={() => {
                          setimagesLoaded(imagesLoaded + 1);
                        }}
                        className="img-fluid d-block portfolio-image"
                        src={project.thumbImage}
                        alt=""
                      />
                      <div
                        onPointerOver={() =>
                          setPointer({ state: true, ind: index })
                        }
                        onPointerOut={() =>
                          setPointer({ state: false, ind: index })
                        }
                        className="portfolio-overlay"
                      >
                        <a
                          className="popup-ajax stretched-link d-sm-none"
                          href={project.live}
                          target="_blank"
                        />
                        <div className="portfolio-overlay-details">
                          <h5 className="text-white fw-400">{project.title}</h5>
                          <a href={project.live} target="_blank">
                            <span className="text-light">View on Live <i className="bi bi-eye-fill me-3"></i></span>
                          </a>
                            <br />
                          <a href={project.github} target="_blank">
                            <span className="text-light">View on Github <i className="bi bi-github"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
