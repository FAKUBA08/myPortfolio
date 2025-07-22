import React, { useState, useEffect } from 'react';
import { publicRequest } from '../Shared/RequestApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Styles from '../Styles/projectPost.module.css';
import { ClipLoader, RingLoader } from 'react-spinners';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

const AdminProject = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    subcontent: '',
    body: '',
    image: null,
    customDate: '',
    liveUrl: '',
    languages: '',
    screenshots: [],
  });
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await publicRequest.get('/project');
      setProjects(response.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error fetching projects.', {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'screenshots') {
      const selectedFiles = Array.from(files);
      setFormData((prev) => {
        const combinedFiles = [...prev.screenshots, ...selectedFiles];
        const limitedFiles = combinedFiles.slice(0, 3);
        return { ...prev, screenshots: limitedFiles };
      });
    } else if (name === 'image') {
      setFormData((prev) => ({
        ...prev,
        image: files && files[0] ? files[0] : null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      body: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'languages' && value) {
          const langArray = value.split(',').map((lang) => lang.trim());
          data.append('languages', JSON.stringify(langArray));
        } else if (key !== 'screenshots' && key !== 'image' && value) {
          data.append(key, value);
        }
      });

      if (formData.image) {
        data.append('image', formData.image);
      }

      if (formData.screenshots.length > 0) {
        formData.screenshots.forEach((file) => {
          data.append('screenshots', file);
        });
      }

      if (editingProjectId) {
        await publicRequest.put(`/project/update/${editingProjectId}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Project updated successfully!', { position: 'top-right' });
      } else {
        await publicRequest.post('/project/add', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Project added successfully!', { position: 'top-right' });
      }

      fetchProjects();
      resetForm();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error saving project.', {
        position: 'top-right',
      });
    } finally {
      setActionLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProjectId(project._id);
    setFormData({
      title: project.title || '',
      subcontent: project.subcontent || '',
      body: project.body || '',
      image: null,
      customDate: project.customDate
        ? new Date(project.customDate).toISOString().slice(0, 10)
        : '',
      liveUrl: project.liveUrl || '',
      languages: project.languages ? project.languages.join(', ') : '',
      screenshots: [],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won’t be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await publicRequest.delete(`/project/delete/${id}`);
        Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
        fetchProjects();
      } catch (err) {
        Swal.fire('Error!', err.response?.data?.message || 'Error deleting project.', 'error');
      }
    } else {
      Swal.fire('Cancelled', 'The project was not deleted.', 'info');
    }
  };

  const handleReadMore = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const resetForm = () => {
    setEditingProjectId(null);
    setFormData({
      title: '',
      subcontent: '',
      body: '',
      image: null,
      customDate: '',
      liveUrl: '',
      languages: '',
      screenshots: [],
    });
  };

  return (
    <div className={Styles.adminPortfolioContainer}>
      <h1 className={Styles.title}>Project Manager</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className={Styles.form}>
        <div className={Styles.inputGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="subcontent">Subcontent</label>
          <textarea
            id="subcontent"
            name="subcontent"
            value={formData.subcontent}
            onChange={handleInputChange}
            required
            className={Styles.textarea}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="body">Body (Rich Text)</label>
          <ReactQuill
            theme="snow"
            value={formData.body}
            onChange={handleQuillChange}
            className={Styles.richText}
            placeholder="Write project details..."
            style={{ backgroundColor: 'white' }}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="customDate">Post Date</label>
          <input
            type="date"
            id="customDate"
            name="customDate"
            value={formData.customDate}
            onChange={handleInputChange}
            className={Styles.input}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="liveUrl">Live URL</label>
          <input
            type="url"
            id="liveUrl"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleInputChange}
            className={Styles.input}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="languages">Languages (comma separated)</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleInputChange}
            className={Styles.input}
          />
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="image">Featured Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            accept="image/*"
            className={Styles.input}
          />
          {formData.image && <small>{formData.image.name}</small>}
        </div>

        <div className={Styles.inputGroup}>
          <label htmlFor="screenshots">Screenshot Images (max 3)</label>
          <input
            type="file"
            id="screenshots"
            name="screenshots"
            multiple
            accept="image/*"
            onChange={handleInputChange}
            className={Styles.input}
          />
          {formData.screenshots.length > 0 && (
            <small>
              {formData.screenshots.length} selected:
              <ul>
                {formData.screenshots.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            </small>
          )}
        </div>

        <button type="submit" className={Styles.submitButton} disabled={actionLoading}>
          {actionLoading ? (
            <RingLoader color="#fff" loading={actionLoading} size={20} />
          ) : editingProjectId ? (
            'Update Project'
          ) : (
            'Add Project'
          )}
        </button>
      </form>

      <h2 className={Styles.portfoliosTitle}>Projects</h2>

      {loading ? (
        <div className={Styles.spinnerContainer}>
          <ClipLoader color="#fff" loading={loading} size={50} />
        </div>
      ) : (
        <ul className={Styles.portfolioList}>
          {projects.map((project) => (
            <li key={project._id} className={Styles.portfolioCard}>
              {project.image && (
                <img
                  src={`data:${project.image.contentType};base64,${project.image.data}`}
                  alt={project.title}
                  className={Styles.portfolioImage}
                />
              )}
              <h3 className={Styles.portfolioTitle}>{project.title}</h3>
              <p className={Styles.portfolioSubcontent}>{project.subcontent}</p>
              {project.customDate && (
                <p className={Styles.portfolioDate}>{formatDate(project.customDate)}</p>
              )}
              {project.liveUrl && (
                <p>
                  🔗{' '}
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.liveUrl}
                  </a>
                </p>
              )}
              {project.languages?.length > 0 && (
                <p className={Styles.languagesUsed}>🛠️ {project.languages.join(', ')}</p>
              )}

              <div className={Styles.portfolioActions}>
                <button onClick={() => handleReadMore(project._id)} className={Styles.readMoreButton}>
                  Case Study
                </button>
                <button onClick={() => handleEdit(project)} className={Styles.editButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(project._id)} className={Styles.deleteButton}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer />
    </div>
  );
};

export default AdminProject;
