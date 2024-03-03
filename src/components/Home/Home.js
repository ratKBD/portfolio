// import React from "react";
// import "./Home.css";
// // import { Link } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import ProjectList from "../MyProjects/ProjectList";
import Contact from "../Contact/Contact";
// import { ReactTyped } from "react-typed";
// import "./stars.scss";

import React from "react";
import "./stars.scss";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      {/* <div className="home">
        <img
          className="code"
          src="https://img.icons8.com/color-glass/96/000000/code.png"
          alt=""
        />

        <div className="text">
          Hi! I'm <span> Ratheesh </span>
        </div>

        <div className="btn">
          <button className="navi">
            <Link className="uline" to="/aboutme">
              ABOUT ME
            </Link>
          </button>
          <button className="navi">
            <Link className="uline" to="/myprojects">
              MY PROJECTS
            </Link>
          </button>
          <button className="navi">
            <Link className="uline" to="/resume">
              RESUME
            </Link>
          </button>
          <button className="navi">
            <Link className="uline" to="/contact">
              CONTACT
            </Link>
          </button>
        </div>
      </div> */}

      <div id="home" className="intro route bg-image background ">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table ">
          <div className="table-cell ">
            <div className="container ">
              <h1 className="intro-title mb-4">Hello, I am Ratheesh</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider ">
                  <ReactTyped
                    strings={[
                      "Front End Developer",
                      // "Back End Developer",
                      "Software Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3 ">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <AboutMe />
        <ProjectList />
        <Contact />
      </div> */}
    </>
  );
};

export default Home;
