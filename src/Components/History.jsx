import React from 'react';
import Styles from '../Styles/History.module.css';
import { motion } from 'framer-motion';

function History() {
  const cardVariants = {
    hidden: { opacity: 0, rotateX: -90, transformOrigin: 'top' },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className={Styles.historyContainer}>
      <h2 className={Styles.heading}>
        Work Experience<span className={Styles.dot}>.</span>
      </h2>
      <p className={Styles.subheading}>Professional Journey</p>

      <div className={Styles.timeline}>

        {/* 1. Left card */}
        <div className={`${Styles.timelineItem} ${Styles.left}`}>
          <div className={Styles.content}>
            <span className={Styles.date}>January 2024 - December 2024</span>
            <motion.div
              className={Styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>Web Development Intern</h3>
              <p className={Styles.company}>SQI College of ICT</p>
              <p className={Styles.description}>
                Developed and maintained multiple web projects, including website clones, a mobile emulator, and an E-commerce website.
                Gained hands-on experience in front-end and back-end development using modern web technologies.
                Worked on responsive web design, improving UI/UX for various applications.
                Collaborated with a team to debug and optimize web applications for better performance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Right card */}
        <div className={`${Styles.timelineItem} ${Styles.right}`}>
          <div className={Styles.content}>
            <span className={Styles.date}>Nov 2024 - Present</span>
            <motion.div
              className={Styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>Fullstack Developer</h3>
              <p className={Styles.company}>
                Diasporavote.eu <span className={Styles.badge}>Current</span>
              </p>
              <p className={Styles.description}>
                Diasporavote.eu is a nonprofit organization founded in 2018 to promote
                inclusive democracy and empower racialized communities across Europe.
                Tasked with increasing political participation and visibility for under‑represented groups,
                the organisation focuses on outreach through training, advocacy, and community mobilisation.
                As a fullstack developer, I built scalable APIs using Node.js and Express, 
                and designed accessible UIs with React and Tailwind CSS.
                Key contributions include secure authentication flows, real‑time data features, multilingual support,
                and performance optimisations.
                Collaborated across teams to establish reliable DevOps workflows, Git‑based version control, 
                and continuous deployment from staging to production.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3. Left card */}
        <div className={`${Styles.timelineItem} ${Styles.left}`}>
          <div className={Styles.content}>
            <span className={Styles.date}>March 2025 - Present</span>
            <motion.div
              className={Styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>Fullstack Developer</h3>
              <p className={Styles.company}>Michaeldigitalsolution <span className={Styles.badge}>Current</span></p>
              <p className={Styles.description}>
                Building and maintaining web solutions for clients across various industries.
                Designed and developed fullstack applications using the MERN stack (MongoDB, Express, React, Node.js).
                Admin dashboards, admin panels, and SEO-friendly landing pages.
                Ensured responsiveness, accessibility, and performance while deploying solutions using modern CI/CD practices.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default History;
