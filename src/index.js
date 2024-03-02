import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "jquery";
import "bootstrap";
import "./style.css";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import ProjectList from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

import "../src/components/images/css/ionicons.css";
import BackToTop from "./components/Back-top";
import Preloader from "./components/Preloader";

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
