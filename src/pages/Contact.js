import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section 
      className="page-section contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-info">
        <a href="mailto:ankushpachori8376@gmail.com" className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>ankushpachori8376@gmail.com</span>
        </a>
        <a href="tel:+918376061072" className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 8376061072</span>
        </a>
        <a href="https://github.com/ankush-pachori" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/ankush-pachori" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;