import React, { useState, useEffect, useRef } from 'react';
import { publicRequest } from '../Shared/RequestApi';
import { useParams, useNavigate } from 'react-router-dom';
import Styles from '../Styles/SingleProject.module.css';
import Nav from "../Components/Nav";
import { Circles } from 'react-loader-spinner';

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingOthers, setLoadingOthers] = useState(true);
  const { projectId } = useParams();
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await publicRequest.get(`/project/${projectId}`);
        setProject(response.data);
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherProjects = async () => {
      try {
        setLoadingOthers(true);
        const response = await publicRequest.get('/project');
        const filtered = response.data.filter(p => p._id !== projectId);
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        setOtherProjects(selected);
      } catch (err) {
        console.error('Error fetching other projects:', err);
      } finally {
        setLoadingOthers(false);
      }
    };

    fetchProject();
    fetchOtherProjects();
  }, [projectId]);

  // Measure heights of other project cards and set maxHeight
  useEffect(() => {
    if (otherProjects.length && cardRefs.current.length === otherProjects.length) {
      const heights = cardRefs.current.map(el => el?.offsetHeight || 0);
      const tallest = Math.max(...heights);
      setMaxHeight(tallest);
    }
  }, [otherProjects, loadingOthers]);

  const handleClick = (id) => {
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

  const boldColons = (htmlString) => {
    if (!htmlString) return '';
    return htmlString.replace(/(\S*:\S*)/g, '<strong>$1</strong>');
  };

  return (
    <div>
      <Nav />
      <div className={Styles.sigleAll}>
        {loading || !project ? (
          <div className={Styles.loadingSpinner}>
            <div className={Styles.dot}></div>
            <div className={Styles.dot}></div>
            <div className={Styles.dot}></div>
          </div>
        ) : (
          <>
            <div className={Styles.singleportfolioContainer}>
              <div className={Styles.portfolioContent}>
                <h1 className={Styles.portfolioTitleUp}>{project.title}</h1>
                <p className={Styles.portfolioSubcontentUp}>{project.subcontent}</p>

                {project.liveUrl && (
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={Styles.liveUrlButton}
                    >
                      Visit Live Site
                    </a>
                  </div>
                )}

                {project.image && (
                  <div className={Styles.portfolioImageContainer}>
                    <img
                      src={`data:${project.image.contentType};base64,${project.image.data}`}
                      alt={project.title}
                      className={Styles.portfolioImage}
                    />
                  </div>
                )}

                {project.screenshots && project.screenshots.length > 0 && (
                  <div className={Styles.screenshotGallery}>
                    <h3 className={Styles.screenshotTitle}>Project Screenshots</h3>
                    <div className={Styles.screenshotImages}>
                      {project.screenshots.slice(0, 3).map((img, index) => (
                        <img
                          key={index}
                          src={`data:${img.contentType};base64,${img.data}`}
                          alt={`Screenshot ${index + 1}`}
                          className={Styles.screenshotImage}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className={Styles.portfolioBody}
                  dangerouslySetInnerHTML={{ __html: boldColons(project.body) }}
                ></div>
              </div>
            </div>

            <div className={Styles.overAll}>
              <div className={Styles.otherProjectsContainer}>
                <div className={Styles.otherTitle}>Other Projects You Might Like</div>
                <div className={Styles.projectsGrid}>
                  {loadingOthers ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                      <Circles height={50} width={50} color="#7C3AED" ariaLabel="loading" />
                    </div>
                  ) : (
                    otherProjects.map((p, index) => (
                      <div
                        key={p._id}
                        className={Styles.portfolioCard}
                        ref={(el) => (cardRefs.current[index] = el)}
                        style={{
                          height: maxHeight || 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div className={Styles.imageContainer}>
                          {p.image && (
                            <img
                              src={`data:${p.image.contentType};base64,${p.image.data}`}
                              alt={p.title}
                              className={Styles.portfolioImage}
                            />
                          )}
                          {p.category && <span className={Styles.categoryTag}>{p.category}</span>}
                        </div>

                        {p.languages?.length > 0 && (
                          <div className={Styles.techTags}>
                            {p.languages.slice(0, 3).map((lang, i) => (
                              <span key={i} className={Styles.techTag}>{lang}</span>
                            ))}
                            {p.languages.length > 3 && (
                              <span className={Styles.techTag}>
                                +{p.languages.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        <h3 className={Styles.portfolioTitle}>{p.title}</h3>
                        <p className={Styles.portfolioSubcontent}>{p.subcontent}</p>

                        {/* Push date and footer to bottom */}
                        <p
                          className={Styles.projectDate}
                          style={{ marginTop: 'auto', paddingTop: '0.5rem' }}
                        >
                          {formatDate(p.customDate || p.createdAt)}
                        </p>

                        <div className={Styles.cardFooter}>
                          <button
                            onClick={() => handleClick(p._id)}
                            className={Styles.viewDetailsButton}
                          >
                            View Details →
                          </button>

                          <div className={Styles.actionIcons}>
                            {p.githubUrl && (
                              <a
                                href={p.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={Styles.iconLink}
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234C4.41 21.287 3.5 18.993 3.5 18.993c-.546-1.387-1.333-1.756-1.333-1.756-.888-.607.068-.595.068-.595 1.005.07 1.537 1.031 1.537 1.031.873 1.496 2.293 1.064 2.85.814.089-.632.342-1.064.623-1.309-2.664-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23.956-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.803 5.624-5.471 5.921.43.371.824 1.101.824 2.221v3.293c0 .318.192.694.801.576C20.565 21.797 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                              </a>
                            )}
                            {p.liveUrl && (
                              <a
                                href={p.liveUrl}
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
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
