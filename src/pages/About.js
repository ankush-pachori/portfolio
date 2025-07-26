import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>I am an enthusiastic AI developer with a strong passion for building intelligent systems and exploring innovative solutions through machine learning and deep learning.</p>
        <p>I enjoy solving real-world problems with data-driven approaches and continuously strive to stay updated with the latest advancements in AI technology.</p>
      </div>
    </motion.section>
  );
};

export default About;