import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "jquery";
import "bootstrap";
import "./style.css";
import About from "./components/About/About";
import ProjectList from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import "../src/components/images/css/ionicons.css";
import BackToTop from "./components/Back-top";
import Preloader from "./components/Preloader";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./components/libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Home />
    <About />
    <ProjectList />
    <Contact />
    <BackToTop />
    <Preloader />
  </React.StrictMode>
);
