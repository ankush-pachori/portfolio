import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProfileOverlay = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ankush-pachori');
        const data = await response.json();
        setProfileImage(data.avatar_url);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {profileImage && (
        <motion.img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default ProfileOverlay;