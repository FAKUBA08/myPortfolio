import React from 'react';
import Styles from '../Styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaHome, FaEnvelope } from 'react-icons/fa';
import { PiHouseBold, PiUser, PiPaperPlaneRightBold } from 'react-icons/pi';
import { LiaLayerGroupSolid } from 'react-icons/lia';
import { motion } from 'framer-motion';
import { Sun, Moon, X, Home, User, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate=useNavigate()
  return (
    <motion.div 
      className={Styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
  

      <div className={Styles.footerContent}>
        <motion.div 
          className={Styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <motion.h2 
            className={Styles.logo}
            whileHover={{ scale: 1.05 }}
          >
            
            <span>Dev</span>Folio
          </motion.h2>
          <p>Full Stack Developer with more than 3 years of experience building modern web applications using React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Modules.</p>
         
         <div className={Styles.socialLinks}>
                            <a href="#" className={Styles.socialLink}>
                              <Github size={18} />
                            </a>
                            <a href="#" className={Styles.socialLink}>
                              <Linkedin size={18} />
                            </a>
                          </div>
         
        </motion.div>

        <motion.div 
          className={Styles.middle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li onClick={()=>navigate("/")}><FaHome /> Home</li>
            <li onClick={()=>navigate("/about")}><PiUser /> About</li>
            <li onClick={()=>navigate("/projects")}><LiaLayerGroupSolid /> Projects</li>
            <li onClick={()=>navigate("/contact")}><PiPaperPlaneRightBold /> Contact</li>
          </ul>
        </motion.div>

        <motion.div 
          className={Styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h3>Contact Me</h3>
          <ul>
            <li><FaHome /> Lagos, Nigeria</li>
            <li><FaEnvelope />  <a href="mailto:badmusfaruq08@gmail.com" className={Styles.emailLink}> badmusfaruq08@gmail.com</a></li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className={Styles.footerBottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>© 2025 Badmus Faruq. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
