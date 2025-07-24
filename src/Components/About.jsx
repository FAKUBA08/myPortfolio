import React from 'react'
import Styles from '../Styles/About.module.css'
import { useNavigate } from 'react-router-dom'
function About() {
const navigate=useNavigate()
  return (
    <div className={Styles.About}>
        <div className={Styles.AboutFlex}>
          <div className={Styles.ImgFlex}>
            
          <div className={Styles.codeBox}>
          <span className={Styles.dot} style={{ backgroundColor: '#ff5f56' }}></span>
          <span className={Styles.dot} style={{ backgroundColor: '#ffbd2e' }}></span>
          <span className={Styles.dot} style={{ backgroundColor: '#27c93f' }}></span>
          <p><code><span className={Styles.keyword}>const</span> passion = <span className={Styles.string}>'coding'</span>;</code></p>
        </div>
                <img src="/Images/21.png" alt="" />
           
          </div>
          <div className={Styles.AboutText}>
                <p>
                  About Me
                </p>
                <span>
                  A showcase of my recent projects highlighting my strengths in full stack development, including frontend responsiveness, clean UI implementation, and efficient backend integration. <p className={Styles.others}>
                    
Full Stack Developer with more than 3 years of experience building modern web applications using React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Modules.
                  </p>
<span>
  <a className={Styles.colorText} > Skilled at transforming Figma designs into polished, accessible UIs and implementing robust backend APIs, authentication,</a>
  and database solutions to deliver end-to-end functionality.
</span>
                </span>
                          <div className={Styles.learnMore} onClick={()=>navigate("/about")}>
              Learn more about me →
          </div>
          </div>
  
        </div>

    </div>
  )
}

export default About
