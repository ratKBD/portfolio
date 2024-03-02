import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";

import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import ProjectList from "./components/MyProjects/ProjectList";

const App = () => {
  return (
    <div>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/myprojects" element={<ProjectList />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
