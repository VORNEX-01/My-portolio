import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Socials from "./Socials";
import Testimonials from "./Testimonials";
import "./App.css"
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white font-sans" >
        <nav className="p-4 bg-gray-800 flex justify-around shadow-md" >
          <Link to="/" className="hover:text-purple-400 transition"> صفحه اصلی </Link>
          <Link to="/about" className="hover:text-purple-400 transition"> | درباره من </Link>
          <Link to="/projects" className="hover:text-purple-400 transition"> | نمونه کار </Link>
          <Link to="/testimonials" className="hover:text-purple-400 transition"> | نظرات </Link>
          <Link to="/socials" className="hover:text-purple-400 transition"> | راه‌های ارتباطی </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;