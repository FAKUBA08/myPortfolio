import React, { useState, useEffect } from 'react';
import Nav from "../Components/Nav";
import Styles from '../Styles/Landing.module.css';
import Chat from "../Components/chat";
import { Sun, Moon, X, Home, User, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import '/index.css';

import { motion } from 'framer-motion';

function Landing() {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAIMessage, setShowAIMessage] = useState(true);
const [showChat, setShowChat] = useState(false);

  const words = ['responsive UIs', 'web applications', 'user interfaces', 'modern websites'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentWord.length) {
      delay = 1000;
    }

    if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setDisplayText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        setIsDeleting(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting]);



  return (
    <div className={Styles.landing}>
      <div>
        <Nav />
      </div>

      <div className={Styles.landingAll}>
        <div className={Styles.container}>
          <div className={Styles.grid}>
            <motion.div
              className={Styles.content}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className={Styles.textSection}>
                <p className={Styles.greeting}>
                  Hello, my name is
                </p>

                <h1 className={Styles.name}>
                  Badmus Faruq
                </h1>

                <h2 className={Styles.title}>
                  I build <span className={Styles.typingText}>{displayText}</span>
                </h2>
              </div>

              <p className={Styles.description}>
                Fullstack developer with over years of experience building web apps using React, Next.js, Tailwind CSS, and Node.js. Focused on creating performant interfaces and clean, scalable backend solutions
              </p>

              <div className={Styles.buttonGroup}>
                <button className={Styles.primaryButton}>
                  View My Work
                  <svg className={`${Styles.icon} ${Styles.arrowIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button className={Styles.secondaryButton}>
                  <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  CV
                </button>
              </div>

               <div className={Styles.socialLinks}>
                            <a href="#" className={Styles.socialLink}>
                              <Github size={18} />
                            </a>
                            <a href="#" className={Styles.socialLink}>
                              <Linkedin size={18} />
                            </a>
                          </div>
            </motion.div>

            {/* Right Content - Profile Section */}
            <motion.div
              className={Styles.profileSection}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <div className={Styles.profileContainer}>
                {/* Decorative Background */}
                <div className={Styles.decorativeBackground}></div>

                {/* Main Profile Container */}
                <div className={Styles.profileCard}>
                  <div className={Styles.profileImageContainer}>
                    <div className={Styles.imagePlaceholder}>
                      <img src="/Images/21.png" alt="Fakuba" className={Styles.profileImage} />
                    </div>

                    {/* Code Snippet Decorations */}
                    <div className={`${Styles.codeSnippet} ${Styles.codeSnippetTop}`}>
                      <code className={Styles.codeText}>
                        const dev = 'enthusiastic';
                      </code>
                    </div>

                    <div className={`${Styles.codeSnippet} ${Styles.codeSnippetBottom}`}>
                      <div className={Styles.techBadge}>
                        <div className={`${Styles.techDot} ${Styles.techDotGreen}`}></div>
                        <span className={Styles.techLabel}>React.js</span>
                      </div>
                    </div>

                    <div className={`${Styles.codeSnippet} ${Styles.codeSnippetLeft}`}>
                      <div className={Styles.techBadge}>
                        <div className={`${Styles.techDot} ${Styles.techDotBlue}`}></div>
                        <span className={Styles.techLabel}>Tailwind</span>
                      </div>
                    </div>

                    <div className={`${Styles.codeSnippet} ${Styles.codeSnippetRight}`}>
                      <div className={Styles.techBadge}>
                        <div className={`${Styles.techDot} ${Styles.techDotBlue}`}></div>
                        <span className={Styles.techLabel}>Node.js</span>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className={Styles.locationBadge}>
                      <div className={Styles.locationContent}>
                        <div className={Styles.locationDot}></div>
                        <span>Lagos, Nigeria</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* AI Message Popup */}
      {showAIMessage && (
  <motion.div
    initial={{ opacity: 0, scale: 0.7, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.7, y: 30 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={Styles.aiMessagePopup}
    onClick={() => {
      setShowChat(true);      
      
    }}
    style={{ cursor: 'pointer' }}
  >
    <button
      className={Styles.aiCloseButton}
      aria-label="Close AI message"
      onClick={(e) => {
        e.stopPropagation(); 
        setShowAIMessage(false);
      }}
    >
      &times;
    </button>

    <div className={Styles.aiIconContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className={Styles.aiIcon}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 0" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    </div>

    <span className={Styles.aiMessageText}>Hi, I'm your AI assistant!</span>
     


  </motion.div>


      )}
       {showChat && <Chat isOpen={true} onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default Landing;
