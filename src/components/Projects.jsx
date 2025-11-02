import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaReact,
  FaGithub,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiKotlin,
  SiSwift,
  SiExpress,
  SiDjango,
  SiSpring,
  SiLaravel,
  SiMysql,
  SiRedis,
  SiFlutter,
  SiDotnet,
  SiXampp,
  SiDart,
  SiFirebase,
} from "react-icons/si";
import "../styles/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "I-Fitness Platform",
      description:
        "A full-stack fitness platform with real-time workout tracking, user profiles, and social features.",
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/12/12/13/sweat-it-3.jpg",
      category: "Full Stack",
      technologies: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "mySQL", icon: <SiMysql /> },
      ],
      github: "",
      live: "",
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
      // github: "https://github.com/Bezliab/campusconnect",
      live: "https://campusconnect-stacksmith-techwiz6.netlify.app/",
    },
    {
      title: "ChapterHouse Mobile App",
      description:
        "Cross-platform mobile app for bookstore management with inventory tracking, user accounts, and social features.",
      image: "/Bookstore.png",
      category: "Mobile",
      technologies: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Firebase", icon: <SiFirebase /> },
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
      title: "CareNest Mobile App",
      description:
        "React-Native mobile app for tracking pregnancy milestones, health tips, and community support.",
      image: "/CARENEST.png",
      category: "Mobile",
      technologies: [
        { name: "React-Native", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
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
                  {project.github && project.github !== "#" && (
                    <a href={project.github} className="project-link">
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} className="project-link">
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
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
