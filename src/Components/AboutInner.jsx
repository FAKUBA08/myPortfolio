import React from 'react';
import Styles from '../Styles/AboutInner.module.css';
import { motion } from 'framer-motion';

function AboutInner() {
  return (
    <motion.div
      className={Styles.AboutInner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={Styles.container}>
        <div className={Styles.content}>
          <motion.div
            className={Styles.leftSection}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className={Styles.name}>Badmus Faruq</h1>
            <div className={Styles.titleSection}>
              <span className={Styles.title}>Fullstack Developer</span>
              <span className={Styles.badge}>Frontend & Backend</span>
            </div>
            <p className={Styles.highlight}>
              Fullstack developer with more than 3 years of experience building modern web apps using
              React, Next.js, Tailwind CSS, Node.js, Firebase, and more. Skilled in creating both frontend
              and backend logic for scalable applications.
            </p>
            <p className={Styles.description}>
              I bring a passion for clean UI/UX, strong backend integration, and modern coding practices.
              Adept with tools like Modules and Express I ensure smooth performance and maintainability.
            </p>
            <div className={Styles.contactButtons}>
              <button className={Styles.emailButton}><a
  href="mailto:badmusfaruq08@gmail.com"
  className={Styles.emailButton}
>
  badmusfaruq08@gmail.com
</a>
</button>
            </div>
            <div className={Styles.profileLinks}>
              <a href="#" className={Styles.profileLink}>LinkedIn Profile</a>
              <a href="#" className={Styles.profileLink}>Github Profile</a>
            </div>
          </motion.div>

          <motion.div
            className={Styles.rightSection}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={Styles.imageContainer}>
              <img src="/Images/new22.PNG" alt="Profile" className={Styles.profileImage} />
              <div className={Styles.status}>
                <div className={Styles.statusDot}></div>
                <span className={Styles.statusText}>Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutInner;
