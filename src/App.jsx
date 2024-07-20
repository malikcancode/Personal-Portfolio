import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    const timeoutId = setTimeout(handleLoad, 1500);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="main">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/email" element={<HeroSection />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
