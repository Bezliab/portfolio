import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { gsap } from "gsap";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/theme.css";
import "../styles/Index.css";
import Fireworks from "../components/Fireworks";

export default function Index() {
  const heroTitle = "Adeniji Isaac";
  const heroTitleRefs = useRef([]);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const subtitleText = "Full Stack & Mobile Developer";
  const [showCursor, setShowCursor] = useState(true);
  const hyperspeedRef = useRef(null);

  const currentYear = new Date().getFullYear();

  // Animate each letter of the hero title
  useEffect(() => {
    gsap.fromTo(
      heroTitleRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.7,
        ease: "power3.out",
        onComplete: () => {
          // Start typewriter after title animation
          let i = 0;
          const type = () => {
            if (i <= subtitleText.length) {
              setTypedSubtitle(subtitleText.slice(0, i));
              i++;
              setTimeout(type, 60);
            }
          };
          type();
        },
      }
    );
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      <Header />

      <section id="home" className="hero-section">
        <Fireworks />
        <div className="hero-content">
          {/* Hero Title */}
          <h1 className="hero-title">
            {heroTitle.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (heroTitleRefs.current[i] = el)}
                style={{
                  minWidth: char === " " ? "0.5em" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Hero Subtitle */}
          <h2
            className="hero-subtitle"
            style={{
              color: "var(--text-primary)",
              textAlign: "center",
              minHeight: "2rem",
              letterSpacing: "0.5px",
              fontFamily: "inherit",
              fontWeight: 400,
            }}
          >
            {typedSubtitle}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>

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
