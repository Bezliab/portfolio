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
import SplitText from "../components/SplitText";

export default function Index() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  const fullText = "Full Stack & Mobile Developer";
  const currentYear = new Date().getFullYear();

  // Hide fireworks after 30s just in case
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  // 🧠 Typewriter effect starts only after SplitText completes
  useEffect(() => {
    if (!startTyping) return;

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
  }, [startTyping]);

  // Triggered when "Adeniji Isaac" finishes animating
  const handleAnim = () => {
    console.log("All letters have animated");
    setShowAnimation(false); // Stop fireworks
    setShowCursor(true);
    setStartTyping(true); // Start typing subtitle
  };

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
          {/* ✨ Animated Name with GSAP SplitText */}
          <SplitText
            text="Adeniji Isaac"
            tag="h1"
            className="hero-title"
            delay={40}
            duration={0.8}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleAnim}
          />

          {/* ✨ Typewriter subtitle */}
          <div className="hero-subtitle">
            {displayText}
            {showCursor && (
              <span style={{ opacity: 1, animation: "blink 1s infinite" }}>
                |
              </span>
            )}
          </div>

          <p className="hero-description fade-in">
            I’m a passionate developer who loves turning ideas into real,
            user-focused digital experiences. I build modern, responsive
            applications with clean design and efficient code.
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
            &copy; {currentYear} Adeniji Isaac - Built with Passion & Skills |
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
