import React from 'react';
import Styles from '../Styles/BlogOverview.module.css';
import { FaCode, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';

function BlogOverView() {
  return (
    <div className={Styles.All}>
      <div className={Styles.BlogOverView}>
        <h2 className={Styles.heading}>
          My Skills<span className={Styles.dot}>.</span>
        </h2>
        <p className={Styles.subheading}>
          Technologies and tools I work with on a daily basis
        </p>

        <div className={Styles.grid}>
          {/* Frontend Development */}
          <div className={Styles.card}>
            <div className={Styles.iconTitle}>
              <FaCode className={Styles.cardIcon} />
              <h3>Frontend Development</h3>
            </div>
            <div className={Styles.tags}>
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Tailwind CSS</span>
                    <span> CSS Modules</span>
            </div>
          </div>

          {/* Backend & Database */}
          <div className={Styles.card}>
            <div className={Styles.iconTitle}>
              <FaDatabase className={Styles.cardIcon} />
              <h3>Backend & Database</h3>
            </div>
            <div className={Styles.tags}>
              <span>Firebase</span>
              <span>Supabase</span>
              <span>Node.js</span>
              <span>Express js</span>
            </div>
          </div>

          {/* Tools & Environments */}
          <div className={Styles.card}>
            <div className={Styles.iconTitle}>
              <FaTools className={Styles.cardIcon} />
              <h3>Tools & Environments</h3>
            </div>
            <div className={Styles.tags}>
              <span>Git</span>
              <span>VS Code</span>
              <span>RESTful APIs</span>
              <span>Responsive Design</span>
            </div>
          </div>

          {/* Other Skills */}
          <div className={Styles.card}>
            <div className={Styles.iconTitle}>
              <FaLightbulb className={Styles.cardIcon} />
              <h3>Other Skills</h3>
            </div>
            <div className={Styles.tags}>
              <span>UI/UX Design</span>
              <span>Problem Solving</span>
              <span>Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOverView;
