import React from 'react'
import Nav from '../Components/Nav'
import Styles from "../Styles/AboutPage.module.css"
import AboutInner from '../Components/AboutInner'
import Skill from '../Components/Skill';
import History from '../Components/History';
import Education  from '../Components/Education';
import Service from '../Components/Service';
import Location from '../Components/Location';
function AboutPage() {
  return (
    <div className={Styles.About}>
        <div>
            <Nav/>
        </div>
        <div>
   <AboutInner/>
        </div>
        <div className={Styles.Skill}>
          <Skill/>
        </div>
         <div className={Styles.History}>
          <History/>
        </div>
             <div className={Styles.History}>
          <Education/>
        </div>
        <div className={Styles.Service}>
          <Service/>  </div>
                 <div className={Styles.Location}>
          <Location/>  </div>
    </div>
    
  )
}

export default AboutPage
