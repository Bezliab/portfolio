import { FaCode, FaRocket, FaMobile } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="about-content">
          <div>
            <p className="about-text">
              I'm a passionate full-stack developer with expertise in creating
              beautiful, functional applications across web and mobile
              platforms. With a keen eye for design and a love for clean code, I
              bring ideas to life through technology.
            </p>

            <p className="about-text">
              My journey spans frontend frameworks, backend architectures, and
              mobile app development. I believe in writing code that not only
              works but is maintainable, scalable, and elegant.
            </p>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3 className="service-title">Frontend Development</h3>
              <p className="service-description">
                Creating responsive, interactive user interfaces with modern
                frameworks and libraries.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaRocket />
              </div>
              <h3 className="service-title">Backend Development</h3>
              <p className="service-description">
                Building robust server-side applications, APIs, and database
                architectures.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaMobile />
              </div>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-description">
                Developing cross-platform mobile applications for iOS and
                Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
