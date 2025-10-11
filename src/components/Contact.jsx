import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_04im4nt",
        "template_rojm5es",
        form.current,
        "IaMp8HNtBJ1tWv2LA"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Ready to bring your ideas to life? Let's discuss your next project and
          create something amazing together.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you need a web application, mobile app, or full-stack
              solution, I'd love to hear from you.
            </p>

            <div className="contact-details">
              <a href="mailto:boluwarin215@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>boluwarin215@gmail.com</p>
                </div>
              </a>

              <a href="tel:+2348025938244" className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <p>+234 8025938244</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-item-content">
                  <h4>Location</h4>
                  <p>Oyo, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Bezliab" className="social-link">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/isaacadeniji"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/I_Newton1?t=uUgk2Y6wWEvrh2XA_klfAw&s=09"
                className="social-link"
              >
                <FaTwitter />
              </a>
              <a href="https://wa.me/2348025938244" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
