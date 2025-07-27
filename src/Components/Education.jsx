import React from 'react';
import Styles from '../Styles/Education.module.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsFillCircleFill } from 'react-icons/bs';

function Education() {
  return (
    <div className={Styles.EducationContainer}>
      <h2 className={Styles.heading}>
        Education<span className={Styles.dot}>.</span>
      </h2>
      <p className={Styles.subheading}>Academic background</p>

      <div className={Styles.card}>
        <div className={Styles.leftBorder}></div>

        <div className={Styles.content}>
          <h3 className={Styles.school}>Ede Polytechnic</h3>
          <p className={Styles.degree}>Higher National Diploma (HND) in Computer Engineering</p>

          <div className={Styles.details}>
            <span className={Styles.location}>
              <HiOutlineLocationMarker size={16} />
              Osun State
            </span>

            <span className={Styles.separator}>|</span>

            <span className={Styles.grade}>
              <BsFillCircleFill size={8} />
              Upper class
            </span>
          </div>
        </div>

        <span className={Styles.badge}>Expected 2026</span>
      </div>
    </div>
  );
}

export default Education;
