import React from 'react';
import Styles from '../Styles/Skill.module.css';

function Skill() {
  return (
    <div className={Styles.skillContainer}>
      <h2>Skills<span style={{ color: '#6c47ff' }}>.</span></h2>
      <p>Technical skills and expertise</p>

      <div className={Styles.skillGrid}>
        <div className={Styles.skillCard}>
          <h3>Frontend Development</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
                   <li>CSS Modules</li>
          </ul>
        </div>

        <div className={Styles.skillCard}>
          <h3>Backend & Database</h3>
          <ul>
            <li>Firebase</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDb</li>
          </ul>
        </div>

        <div className={Styles.skillCard}>
          <h3>Tools & Environments</h3>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>RESTful APIs</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className={Styles.skillCard}>
          <h3>Other Skills</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
