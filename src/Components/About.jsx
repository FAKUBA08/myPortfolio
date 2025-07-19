import React from 'react'
import Styles from "../Styles/Blog.module.css"
import Nav from "./Nav"

function Blog() {
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

export default Blog
