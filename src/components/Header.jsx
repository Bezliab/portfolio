import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          Bezliab
        </a>
        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <li>
            <a
              href="#about"
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-link"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Header;
