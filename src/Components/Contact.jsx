import React from 'react'
import Styles from "../Styles/Contact.module.css"
import ContactPage from '../Components/ContactPage'
import Nav from "../Components/Nav"

function Contact() {
  return (
    <div className={Styles.Contact}>
          <div>
            <Nav/>
        </div>
        <div >
      <ContactPage/>
        </div>
    </div>
  )
}

export default Contact
