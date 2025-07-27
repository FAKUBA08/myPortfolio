import React from 'react';
import Styles from '../Styles/Service.module.css';
import { FaCode, FaDatabase, FaDesktop, FaLayerGroup } from 'react-icons/fa';

function Service() {
  return (
    <div className={Styles.serviceContainer}>
      <h2 className={Styles.heading}>
        Services<span className={Styles.dot}>.</span>
      </h2>
      <p className={Styles.subheading}>What I can do for you</p>

      <div className={Styles.cardsWrapper}>
        <div className={Styles.card}>
          <div className={Styles.icon}><FaCode /></div>
          <h3 className={Styles.title}>Frontend Development</h3>
          <p className={Styles.text}>
            Building responsive and interactive web applications using modern JavaScript frameworks like React with Redux.
          </p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.icon}><FaLayerGroup /></div>
          <h3 className={Styles.title}>UI Implementation</h3>
          <p className={Styles.text}>
            Implementing UI designs from Figma into responsive and functional web applications with attention to detail.
          </p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.icon}><FaDatabase /></div>
          <h3 className={Styles.title}>Backend Integration</h3>
          <p className={Styles.text}>
            Connecting your frontend applications to backend services using Firebase, Supabase or Node.js.
          </p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.icon}><FaDesktop /></div>
          <h3 className={Styles.title}>Web Optimization</h3>
          <p className={Styles.text}>
            Optimizing web applications for performance, speed, and SEO to enhance user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
