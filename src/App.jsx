import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Portfolio from "./Pages/Portfolio"
import Blog from "./Pages/Blog"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
