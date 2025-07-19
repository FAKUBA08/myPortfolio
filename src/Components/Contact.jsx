import React from 'react'
import Styles from "../Styles/Contact.module.css"
import Nav from "../Components/Nav"

function Contact() {
  return (
    <div className={Styles.Contact}>
          <div>
            <Nav/>
        </div>
        <div>
      Hello Contact
        </div>
    </div>
  )
}

export default Contact
