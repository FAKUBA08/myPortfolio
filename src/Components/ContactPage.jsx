import React, { useState } from 'react';
import Styles from "../Styles/ContactPage.module.css";
import { FaUser, FaEnvelope, FaTag, FaRegCommentDots } from 'react-icons/fa';
import { publicRequest } from '../Shared/RequestApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicRequest.post('/messages', formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.ContactPage}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={Styles.container}>
        {/* Header Section */}
        <div className={Styles.header}>
          <div className={Styles.availability}>
            <span className={Styles.dot}></span>
            Available for freelance work
          </div>
          <h1 className={Styles.title}>Let's Connect</h1>
          <p className={Styles.subtitle}>
            I'm always open to discussing new projects, creative ideas or opportunities to be
            part of your vision.
          </p>
        </div>

        {/* Main Content */}
        <div className={Styles.content}>
          {/* Contact Information */}
          <div className={Styles.contactInfo}>
            <h3 className={Styles.sectionTitle}>Contact Information</h3>

            {/* Location */}
            <div className={Styles.contactItem}>
              <div className={Styles.iconWrapper}>
                <svg className={Styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
              </div>
              <div className={Styles.contactDetails}>
                <div className={Styles.contactLabel}>Location</div>
                <div className={Styles.contactValue}>Lagos, Nigeria</div>
              </div>
            </div>

            {/* Email */}
            <div className={Styles.contactItem}>
              <div className={Styles.iconWrapper}>
                <svg className={Styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className={Styles.contactDetails}>
                <div className={Styles.contactLabel}>Email Address</div>
                <div className={Styles.contactValue}>badmusfaruq08@gmail.com</div>
              </div>
            </div>

            {/* Phone */}
            <div className={Styles.contactItem}>
              <div className={Styles.iconWrapper}>
                <svg className={Styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className={Styles.contactDetails}>
                <div className={Styles.contactLabel}>Phone</div>
                <div className={Styles.contactValue}>+234 9025479011</div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className={Styles.contactItem}>
              <div className={Styles.iconWrapper}>
                <svg className={Styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </div>
              <div className={Styles.contactDetails}>
                <div className={Styles.contactLabel}>LinkedIn</div>
                <div className={Styles.contactValue}>Loading.....</div>
              </div>
            </div>

            {/* GitHub */}
            <div className={Styles.contactItem}>
              <div className={Styles.iconWrapper}>
                <svg className={Styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div className={Styles.contactDetails}>
                <div className={Styles.contactLabel}>GitHub</div>
                <div className={Styles.contactValue}>Private</div>
              </div>
            </div>

            {/* Map Section */}
            <div className={Styles.mapSection}>
              <h4 className={Styles.mapTitle}>My Location</h4>
              <div className={Styles.mapContainer}>
                <div className={Styles.mapPlaceholder}>
                  <img src="/Images/location.png" alt="Location" className={Styles.mapImage} />
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className={Styles.messageForm}>
            <h3 className={Styles.sectionTitle}>Send Message</h3>

            <form className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.formRow}>
                <div className={Styles.inputGroup}>
                  <label className={Styles.label}>
                    <FaUser className={Styles.labelIcon} /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className={Styles.input}
                    required
                  />
                </div>
                <div className={Styles.inputGroup}>
                  <label className={Styles.label}>
                    <FaEnvelope className={Styles.labelIcon} /> Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    className={Styles.input}
                    required
                  />
                </div>
              </div>

              <div className={Styles.inputGroup}>
                <label className={Styles.label}>
                  <FaTag className={Styles.labelIcon} /> Subject (Optional)
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?" 
                  className={Styles.input}
                />
              </div>

              <div className={Styles.inputGroup}>
                <label className={Styles.label}>
                  <FaRegCommentDots className={Styles.labelIcon} /> Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  rows={6}
                  className={Styles.textarea}
                  required
                ></textarea>
              </div>

              <button type="submit" className={Styles.submitButton} disabled={loading}>
                {loading ? (
                  <div className={Styles.loader}></div>
                ) : (
                  <>
                    <svg className={Styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22,2 15,22 11,13 2,9 22,2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default ContactPage;
