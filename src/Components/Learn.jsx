import { useNavigate } from "react-router-dom";
import Styles from '../Styles/Learn.module.css';
import Nav from '../Components/Nav';
import Price from "../Components/Price";
import Front from '../Components/Front';
import Backend from '../Components/Backend';
import FAQ from '../Components/FAQs';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
function Learn() {
  const navigate = useNavigate();
const handleClick = () => {
  navigate("/", { state: { scrollTo70: true } });
};
const location = useLocation()

useEffect(() => {
  // Always start at the top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Then, if asked, scroll to price-section
  if (location.state?.scrollTo === "price-section") {
    const section = document.getElementById("price-section");
    
  }
}, [location]);

  return (
    <div className={Styles.Learn}>
      <Nav />
      <div className={Styles.LearnInner}>
        <div className={Styles.content}>
          <h1 className={Styles.title}>
            SOFTWARE ENGINEERING & FULLSTACK DEVELOPMENT
          </h1>
          <p className={Styles.description}>
            As a Software Engineer, you can choose to specialize in different
            paths. One of the most in-demand career options today is{" "}
            <strong>FullStack Development</strong>. This path equips you with
            the skills to build complete web applications — from designing user
            interfaces (Frontend) to managing databases and server-side logic
            (Backend).
          </p>

          {/* Register Button */}
          <button className={Styles.registerButton} onClick={handleClick}>
            Register Now
          </button>
        </div>
      </div>

      {/* Other sections */}
      <div>
        <Price />
      </div>
      <div>
        <Front />
      </div>
      <div>
        <Backend />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Learn;
