import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Styles from '../Styles/CurriculumModal.module.css';

const CurriculumModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const curriculumData = {
    level1: {
      title: "LEVEL 1",
      items: [
        "HyperText Markup Language (HTML)",
        "Version Control System (GIT Local)",
        "Introduction to Javascript",
        "Cascading Style Sheet (CSS)",
        "CSS Framework (Bootstrap)",
        "Hosting and Deployment"
      ]
    },
    level2: {
      title: "LEVEL 2",
      subtitle: "JAVASCRIPT & FIREBASE",
      items: [
        "Variables and Operators",
        "Javascript Object Notation and APIs",
        "Graphs and Gaming (HTML Canvas)",
        "Hosting and Deployment",
        "Version Control System (GIT Remote)",
        "Control Structures and Data Structures",
        "Object Oriented Programming",
        "Regular Expression",
        "Database Management",
        "Authentication",
        "File Storage"
      ]
    },
    level3: {
      title: "LEVEL 3",
      subtitle: "MERN",
      items: [
        "React (Frontend)",
        "MongoDB (Database)",
        "Express (Backend)",
        "Node js (Backend)"
      ]
    },
    level4: {
      title: "LEVEL 4",
      items: [
        "Render Deployment",
        "Domain Setup",
        "Freelancing (Fiverr)"
      ]
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalContent = (
    <div className={Styles.modalOverlay} onClick={closeModal}>
      <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={Styles.closeButton} onClick={closeModal}>
          ×
        </button>

        <div className={Styles.modalHeader}>
          <h2 className={Styles.modalTitle}>
            Fullstack Engineer Curriculum
          </h2>
        </div>

        <div className={Styles.curriculumContainer}>
          {/* Level 1 */}
          <div className={Styles.levelCard}>
            <div className={Styles.levelHeader}>
              <span className={Styles.levelBadge}>
                {curriculumData.level1.title}
              </span>
            </div>
            <div className={Styles.itemsGrid}>
              {curriculumData.level1.items.map((item, index) => (
                <div key={index} className={Styles.curriculumItem}>
                  <span className={Styles.itemBullet}></span>
                  <span className={Styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level 2 */}
          <div className={Styles.levelCard}>
            <div className={Styles.levelHeader}>
              <span className={Styles.levelBadge}>
                {curriculumData.level2.title}
              </span>
              <span className={Styles.levelSubtitle}>
                {curriculumData.level2.subtitle}
              </span>
            </div>
            <div className={Styles.itemsGrid}>
              {curriculumData.level2.items.map((item, index) => (
                <div key={index} className={Styles.curriculumItem}>
                  <span className={Styles.itemBullet}></span>
                  <span className={Styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level 3 */}
          <div className={Styles.levelCard}>
            <div className={Styles.levelHeader}>
              <span className={Styles.levelBadge}>
                {curriculumData.level3.title}
              </span>
              <span className={Styles.levelSubtitle}>
                {curriculumData.level3.subtitle}
              </span>
            </div>
            <div className={Styles.itemsGrid}>
              {curriculumData.level3.items.map((item, index) => (
                <div key={index} className={Styles.curriculumItem}>
                  <span className={Styles.itemBullet}></span>
                  <span className={Styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level 4 */}
          <div className={Styles.levelCard}>
            <div className={Styles.levelHeader}>
              <span className={Styles.levelBadge}>
                {curriculumData.level4.title}
              </span>
            </div>
            <div className={Styles.itemsGrid}>
              {curriculumData.level4.items.map((item, index) => (
                <div key={index} className={Styles.curriculumItem}>
                  <span className={Styles.itemBullet}></span>
                  <span className={Styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level 5 Note */}
          <div className={Styles.level5Container}>
            <span className={Styles.level5Badge}>
              LEVEL 5
            </span>
            <p className={Styles.level5Text}>
              Advanced specialization tracks coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div onClick={openModal}>
        {children}
      </div>
      {isOpen && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
};

export default CurriculumModal;
