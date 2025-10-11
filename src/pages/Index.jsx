import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Fireworks from "../components/Fireworks";
import "../styles/theme.css";
import "../styles/Index.css";

export default function Index() {
  const [displayText, setDisplayText] = useState("");

  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack & Mobile Developer";
  const currentYear = new Date().getFullYear();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      <Header />

      <section id="home" className="hero-section">
        <Fireworks />
        {showAnimation && <div className="fireworks-overlay"></div>}
        <div className="hero-content">
          <h1 className="hero-title">Adeniji Isaac</h1>
          <div className="hero-subtitle">
            {displayText}
            {showCursor && (
              <span style={{ opacity: 1, animation: "blink 1s infinite" }}>
                |
              </span>
            )}
          </div>

          <p className="hero-description">
            Crafting beautiful digital experiences through Frontend, Backend,
            and Mobile development is what I do best.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div
            style={{ marginTop: "3rem", cursor: "pointer" }}
            onClick={scrollToAbout}
          >
            <FaChevronDown
              style={{
                fontSize: "1.6rem",
                color: "var(--accent-primary)",
                animation: "bounce 2s infinite",
              }}
            />
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {currentYear} Adeniji Isaac - Built with React & Love | All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
