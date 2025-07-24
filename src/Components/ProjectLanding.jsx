import React, { useState, useEffect, useRef } from 'react';
import { publicRequest } from '../Shared/RequestApi';
import { useNavigate } from 'react-router-dom';
import Styles from '../Styles/ProjectLanding.module.css';
import Nav from '../Components/Nav';
import Footer from "../Components/Footer"

const ProjectLanding = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const categorizeProject = (languages) => {
    if (!languages || languages.length === 0) return 'Basic Website';
    const langs = languages.map(lang => lang.toLowerCase());
    const hasNode = langs.includes('node.js') || langs.includes('node');
    const hasFirebase = langs.includes('firebase');
    const hasReact = langs.includes('react');
    const hasHtml = langs.includes('html');
    const hasClone = langs.includes('clone');

    if (hasClone) return 'Clone Websites';
    if (hasNode || hasFirebase) return 'Web Applications';
    if (hasReact && !hasNode && !hasFirebase) return 'Websites';
    if (hasHtml && !hasReact && !hasNode && !hasFirebase) return 'Basic Website';

    return 'Basic Website';
  };

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get('/project');
        const categorized = res.data.map(p => ({
          ...p,
          projectCategory: categorizeProject(p.languages)
        }));
        setProjects(categorized);
        setFilteredProjects(categorized);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (filteredProjects.length && cardRefs.current.length) {
      const heights = cardRefs.current.map(el => el?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [filteredProjects]);

  const handleFilterChange = filter => {
    setActiveFilter(filter);
    setFilteredProjects(filter === 'All' ? projects : projects.filter(p => p.projectCategory === filter));
  };

  const handleReadMore = id => navigate(`/project/${id}`);

  const formatDate = dateString => new Date(dateString).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  const filterOptions = ['All', 'Web Applications', 'Websites', 'Clone Websites', 'Basic Website'];

  return (
    <div className={Styles.ProjectLanding}>
      <Nav />

      <div className={Styles.portfolioLandingContainer}>
        <h2 className={Styles.landText}>My Projects</h2>
        <p className={Styles.subtitle}>
          A collection of my recent work, showing my skills in fullstack-development, responsive implementation, and UI implementation.
        </p>

        <div className={Styles.filterContainer}>
          {filterOptions.map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`${Styles.filterButton} ${activeFilter === filter ? Styles.activeFilter : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className={Styles.bigRoller}>
            <div className={Styles.roller}>
              {[...Array(8)].map((_, i) => <div key={i}></div>)}
            </div>
          </div>
        ) : (
          <>
            <div className={Styles.projectsGrid}>
              {filteredProjects.map((project, i) => (
                <div
                  key={project._id}
                  className={Styles.portfolioCard}
                  ref={el => (cardRefs.current[i] = el)}
                  style={{ height: maxHeight || 'auto', display: 'flex', flexDirection: 'column' }}
                >
                  <div className={Styles.imageContainer}>
                    {project.image && (
                      <img
                        src={`data:${project.image.contentType};base64,${project.image.data}`}
                        alt={project.title}
                        className={Styles.portfolioImage}
                      />
                    )}
                    <span className={Styles.categoryTag}>{project.projectCategory}</span>
                  </div>

                  {project.languages?.length > 0 && (
                    <div className={Styles.techTags}>
                      {project.languages.slice(0, 3).map((lang, idx) => (
                        <span key={idx} className={Styles.techTag}>{lang}</span>
                      ))}
                      {project.languages.length > 3 && (
                        <span className={Styles.techTag}>+{project.languages.length - 3}</span>
                      )}
                    </div>
                  )}

                  <h3 className={Styles.portfolioTitle}>{project.title}</h3>
                  <p className={Styles.portfolioSubcontent}>{project.subcontent}</p>

                  <p className={Styles.projectDate} style={{ marginTop: 'auto' }}>
                    {formatDate(project.customDate || project.createdAt)}
                  </p>

                  <div className={Styles.cardFooter}>
                    <button
                      onClick={() => handleReadMore(project._id)}
                      className={Styles.viewDetailsButton}
                    >
                      View Details →
                    </button>
                    <div className={Styles.actionIcons}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className={Styles.iconLink}>
                          {/* GitHub SVG */}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373..."/>
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className={Styles.iconLink}>
                          {/* External SVG */}
                          <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className={Styles.noProjects}>
                <p>No projects found for the selected category.</p>
              </div>
            )}
          </>
        )}
   
      </div>
           <div>
          <Footer/>
        </div>
    </div>
  );
};

export default ProjectLanding;
