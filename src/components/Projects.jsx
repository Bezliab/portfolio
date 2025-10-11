import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiReact,
  SiFlutter,
  SiJavascript,
} from "react-icons/si";
import "../styles/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      github: "#",
      live: "#",
    },
    {
      title: "College Event Management App",
      description:
        "A collaborative event management application with real-time updates, team collaboration, and progress tracking.",
      image: "https://explore.neumann.edu/hubfs/19466-college-fair-2022.jpg",
      category: "Frontend",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
      github: "https://github.com/Bezliab/campusconnect",
      live: "https://campusconnect-stacksmith-techwiz6.netlify.app/",
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Mobile",
      technologies: [
        { name: "React Native", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "Frontend",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with multiple rooms, file sharing, and video calling capabilities.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Recipe Sharing App",
      description:
        "Flutter-based mobile app for sharing and discovering recipes with social features and meal planning.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      category: "Mobile",
      technologies: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      github: "#",
      live: "#",
    },
  ];

  const categories = ["All", "Frontend", "Mobile", "Full Stack"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          A showcase of my work across frontend, backend, and mobile development
        </p>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-tag">
                      <span className="tech-icon">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
