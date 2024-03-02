import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="global">
        <div className="aboutme">
          <div className="left">
            <a
              className="anchor"
              href="https://www.linkedin.com/in/ratheesh-v-90b609184/"
              target="_blank"
              rel="noreferrer"
            >
              <i className=" bi bi-linkedin"></i>
            </a>
            <a
              className="anchor"
              href="https://github.com/ratKBD"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              className="anchor"
              href="mailto: vratheesh123@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-google"></i>
            </a>
            <a
              className="anchor"
              href="https://www.instagram.com/ratheesh_cristiano_/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <div className="right">
            Kim is a technical writer who is passionate about animal welfare and
            the environment. A writer by day and a reader at night, she takes
            pleasure in acquiring new knowledge. She is an experienced
            researcher and advertising executive. In an alternate universe, she
            is a professional model.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
