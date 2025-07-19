import React from 'react'
import Styles from "../Styles/About.module.css"
import Nav from "../Components/Nav"

function About() {
  return (
    <div className={Styles.Blog}>
       <div>
           <Nav/>
       </div>
       <div>
        Hello Blog
       </div>
    </div>
  )
}

export default About;
