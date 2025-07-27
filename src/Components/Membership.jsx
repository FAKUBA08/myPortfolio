import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Styles from '../Styles/Membership.module.css'
import { publicRequest } from '../Shared/RequestApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await publicRequest.post('/membership', formData)
      toast.success("Thank you for contacting us. We'll get back to you soon", {
      position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Submission failed. Please try again.', {
        position: 'bottom-right'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/09025479011', '_blank')
  }

  return (
    <div className={Styles.membership}>
        
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1 className={Styles.title}>Join Our Development Program</h1>
          <p className={Styles.subtitle}>
            Master modern web development with expert guidance and hands-on projects
          </p>
        </div>

        <div className={Styles.content}>
          <div className={Styles.coursesSection}>
            <h2 className={Styles.sectionTitle}>Choose Your Path</h2>
            <div className={Styles.courseCards}>
              <div className={Styles.courseCard}>
                <h3>Frontend Development</h3>
                <p>Html, Css, Bootsrap, Javascript, Git & Github, React, Modules</p>
                <ul>
                  <li>Modern React Hooks</li>
                  <li>Responsive Design</li>
                  <li>State Management</li>
                </ul>
              </div>
              <div className={Styles.courseCard}>
                <h3>Backend Development</h3>
                <p>Firebase, Node.js, APIs, Express.js, Databases</p>
                <ul>
                  <li>RESTful APIs</li>
                  <li>Database Design</li>
                  <li>Authentication</li>
                </ul>
              </div>
              <div className={Styles.courseCard}>
                <h3>Fullstack Development</h3>
                <p>Complete end-to-end solutions</p>
                <ul>
                  <li>Frontend + Backend</li>
                  <li>Deployment</li>
                  <li>Real Projects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={Styles.formSection}>
            <form className={Styles.form} onSubmit={handleSubmit}>
              <h2 className={Styles.formTitle}>Apply Now</h2>

              <div className={Styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.inputGroup}>
                <label htmlFor="course">Course Interest</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Fullstack Development</option>
                </select>
              </div>

              <div className={Styles.inputGroup}>
                <label htmlFor="experience">Programming Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <button type="submit" className={Styles.submitBtn} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>

            <div className={Styles.contactSection}>
              <p className={Styles.contactText}>Have questions? Let's chat!</p>
              <button
                className={Styles.whatsappBtn}
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className={Styles.whatsappIcon} />
                Contact on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership
