import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Styles from '../Styles/Nav.module.css';
import { Sun, Moon } from 'lucide-react';
import '/index.css';
function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
<div className={`${Styles.navHome} ${theme === 'dark' ? Styles.darkNav : ''}`}>


      <nav className={Styles.navbar}>
        <div className={Styles.logo} onClick={() => navigate("/")}>
          <span className={Styles.purple}>Dev</span>Folio
          <span className={Styles.dot}></span>
        </div>

        <div className={Styles.newFlex}>
          <div className={Styles.links}>
            <Link
              to="/"
              className={`${Styles.link} ${location.pathname === '/' ? Styles.active : ''}`}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`${Styles.link} ${location.pathname === '/work' ? Styles.active : ''}`}
            >
              Work
            </Link>
            <Link
              to="/blog"
              className={`${Styles.link} ${location.pathname === '/blog' ? Styles.active : ''}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`${Styles.link} ${location.pathname === '/contact' ? Styles.active : ''}`}
            >
              Contact
            </Link>
          </div>

          <div
            className={`${Styles.toggleWrapper} ${theme === 'dark' ? Styles.dark : ''}`}
            onClick={toggleTheme}
          >
            <div className={Styles.iconOverlay}>
              <Sun size={20} className={Styles.sunGhost} />
              <Moon size={20} className={Styles.moonGhost} />
            </div>
            <div className={Styles.toggleThumb}>
              {theme === 'light' ? (
                <Sun size={20} color="#f59e0b" />
              ) : (
                <Moon size={20} color="#64748b" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
