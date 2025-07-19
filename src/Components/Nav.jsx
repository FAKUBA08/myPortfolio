import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Styles from '../Styles/Nav.module.css';
import { Sun, Moon, X, Home, User, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderOpen },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <div className={`${Styles.navHome} ${theme === 'dark' ? Styles.darkNav : ''}`}>
        <nav className={Styles.navbar}>
          <div className={Styles.logo} onClick={() => navigate("/")}>
            <span className={Styles.purple}>Dev</span>Folio
            <span className={Styles.dot}></span>
          </div>

          <div className={Styles.newFlex}>
            <div className={Styles.links}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${Styles.link} ${location.pathname === item.to ? Styles.active : ''}`}
                >
                  {item.label}
                </Link>
              ))}
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

            {/* Hamburger Menu */}
            <div 
              className={`${Styles.hamburger} ${isSidebarOpen ? Styles.open : ''}`}
              onClick={toggleSidebar}
            >
              <div className={Styles.hamburgerLine}></div>
              <div className={Styles.hamburgerLine}></div>
              <div className={Styles.hamburgerLine}></div>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div 
        className={`${Styles.overlay} ${isSidebarOpen ? Styles.open : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div className={`${Styles.sidebar} ${isSidebarOpen ? Styles.open : ''} ${theme === 'dark' ? Styles.darkNav : ''}`}>
        <div className={Styles.sidebarHeader}>
          <div className={Styles.sidebarLogo}>
            <span className={Styles.purple}>Dev</span>Folio
            <span className={Styles.dot}></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              className={`${Styles.toggleWrapper } ${theme === 'dark' ? Styles.dark : ''}`}
              onClick={toggleTheme}
              style={{ width: '60px', height: '28px' }}
            >
              <div className={Styles.iconOverlay}>
                <Sun size={16} className={Styles.sunGhost} />
                <Moon size={16} className={Styles.moonGhost} />
              </div>
              <div className={Styles.toggleThumb} style={{ width: '22px', height: '22px', top: '3px', left: '3px' }}>
                {theme === 'light' ? (
                  <Sun size={14} color="#f59e0b" />
                ) : (
                  <Moon size={14} color="#64748b" />
                )}
              </div>
            </div>
            <button className={Styles.closeButton} onClick={closeSidebar}>
              <X size={24} />
            </button>
          </div>
        </div>

        <div className={Styles.sidebarContent}>
          <div className={Styles.navigationSection}>
            <div className={Styles.sectionTitle}>Navigation</div>
            <div className={Styles.sidebarLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${Styles.sidebarLink} ${location.pathname === item.to ? Styles.active : ''}`}
                  onClick={closeSidebar}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={Styles.needDeveloper}>
            <div className={Styles.needDeveloperTitle}>Need a developer?</div>
            <div className={Styles.needDeveloperText}>
              I'm available for freelance projects.
            </div>
          </div>

          <div className={Styles.connectSection}>
            <div className={Styles.sectionTitle}>Connect</div>
            <div className={Styles.socialLinks}>
              <a href="#" className={Styles.socialLink}>
                <Github size={18} />
              </a>
              <a href="#" className={Styles.socialLink}>
                <Linkedin size={18} />
              </a>
            </div>
            <button className={Styles.getInTouchButton}>
              <Mail size={16} />
              Get in Touch
            </button>
          </div>
        </div>

        <div className={Styles.sidebarFooter}>
          2025 DevFolio. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Nav;