import Styles from '../Styles/Learn.module.css';
import Nav from '../Components/Nav';
import Price from "../Components/Price"
import Front from '../Components/Front';
import Backend from '../Components/Backend';
import FAQ from '../Components/FAQs';
import Footer from '../Components/Footer';

function Learn() {
  return (
    <div className={Styles.Learn}> 
      <Nav/>
      <div className={Styles.LearnInner}>
        <div className={Styles.content}>
          <h1 className={Styles.title}>SOFTWARE ENGINEERING & FULLSTACK DEVELOPMENT</h1>
          <p className={Styles.description}>
            As a Software Engineer, you can choose to specialize in different paths. 
            One of the most in-demand career options today is <strong>FullStack Development</strong>. 
            This path equips you with the skills to build complete web applications — from designing user interfaces (Frontend) 
            to managing databases and server-side logic (Backend).
          </p>
          <button className={Styles.registerButton}>Register Now</button>
        </div>
      </div>
      <div>
        <Price/>
      </div>
           <div>
        <Front/>
      </div>
            <div>
        <Backend/>
      </div>
                <div>
        <FAQ/>
      </div>
                    <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Learn;
