import {
  FaReact,
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
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        // { name: "Vue.js", icon: <FaVuejs /> },
        // { name: "Angular", icon: <FaAngular /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <FaPhp /> },
        // { name: "Express.js", icon: <SiExpress /> },
        { name: ".NET Core", icon: <SiDotnet /> },
        { name: "Django", icon: <SiDjango /> },
        // { name: "Spring Boot", icon: <SiSpring /> },
        // { name: "Laravel", icon: <SiLaravel /> },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", icon: <SiReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        // { name: "Swift", icon: <SiSwift /> },
        // { name: "Kotlin", icon: <SiKotlin /> },
        { name: "iOS", icon: <FaApple /> },
        { name: "Android", icon: <FaAndroid /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        // { name: "Redis", icon: <SiRedis /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Xampp", icon: <SiXampp /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          A comprehensive toolkit for building modern applications across all
          platforms
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
