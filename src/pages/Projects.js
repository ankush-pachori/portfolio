import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3, FaJs, FaNode, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';

const getLanguageIcon = (language) => {
  switch (language?.toLowerCase()) {
    case 'javascript':
      return <FaJs className="language-icon" />;
    case 'typescript':
      return <SiTypescript className="language-icon" />;
    case 'html':
      return <FaHtml5 className="language-icon" />;
    case 'css':
      return <FaCss3 className="language-icon" />;
    case 'python':
      return <FaPython className="language-icon" />;
    case 'react':
      return <FaReact className="language-icon" />;
    default:
      return null;
  }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ankush-pachori/repos');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="page-section">
        <h2 className="section-title">Loading Projects...</h2>
      </div>
    );
  }

  return (
    <motion.section 
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-content">
              <div className="project-header">
                {getLanguageIcon(project.language)}
                <h3>{project.name}</h3>
              </div>
              <p>{project.description || 'No description available'}</p>
              <div className="tech-stack">
                <span className="tech-tag">{project.language || 'Various'}</span>
              </div>
              <div className="project-links">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;