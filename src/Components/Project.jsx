import React, { useState, useEffect, useRef } from 'react';
import { publicRequest } from '../Shared/RequestApi';
import { useNavigate } from 'react-router-dom';
import Styles from '../Styles/Project.module.css';


const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await publicRequest.get('/project');
        setProjects(response.data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length && cardRefs.current.length) {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const tallest = Math.max(...heights);
      setMaxHeight(tallest);
    }
  }, [projects, loading]);

  const handleReadMore = (id) => {
    navigate(`/project/${id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={Styles.portfolioLandingContainer}>
      <h2 className={Styles.landText}>Featured Projects.</h2>
      <p className={Styles.subtitle}>
        Here are some of my recent works. Each project is unique and showcases different skills and
        technologies.
      </p>

      {loading && (
        <div className={Styles.spinner}>
          <div className={Styles.dot}></div>
          <div className={Styles.dot}></div>
          <div className={Styles.dot}></div>
        </div>
      )}

      <div className={Styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={Styles.portfolioCard}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ height: maxHeight || 'auto', display: 'flex', flexDirection: 'column' }}
          >
            {/* Image & Category */}
            <div className={Styles.imageContainer}>
              {project.image && (
                <img
                  src={`data:${project.image.contentType};base64,${project.image.data}`}
                  alt={project.title}
                  className={Styles.portfolioImage}
                />
              )}
              {project.category && <span className={Styles.categoryTag}>{project.category}</span>}
            </div>

            {/* Technologies */}
            {project.languages?.length > 0 && (
              <div className={Styles.techTags}>
                {project.languages.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className={Styles.techTag}>
                    {tech}
                  </span>
                ))}
                {project.languages.length > 3 && (
                  <span className={Styles.techTag}>+{project.languages.length - 3}</span>
                )}
              </div>
            )}

            {/* Title and Subcontent */}
            <h3 className={Styles.portfolioTitle}>{project.title}</h3>
            <p className={Styles.portfolioSubcontent}>{project.subcontent}</p>

            {/* Date */}
            <p className={Styles.projectDate} style={{ marginTop: 'auto' }}>
              {formatDate(project.customDate || project.createdAt)}
            </p>

            {/* Footer */}
            <div className={Styles.cardFooter}>
              <button
                onClick={() => handleReadMore(project._id)}
                className={Styles.viewDetailsButton}
              >
                View Details →
              </button>
              <div className={Styles.actionIcons}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.iconLink}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.iconLink}
                  >
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

      <div className={Styles.viewAllContainer}>
        <button onClick={() => navigate('/projects')} className={Styles.viewAllButton}>
          View All Projects →
        </button>
      </div>
    </div>
  );
};

export default Project;
