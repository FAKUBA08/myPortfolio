import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '/index.css';
import Landing from './Components/Landing';
    import AboutPage from './Components/AboutPage';
      import Contact from './Components/Contact';
      import ProjectPost from "./Components/ProjectPost";
      import ProjectLanding from './Components/ProjectLanding';
      import SingleProject from './Components/SingleProject'; 
      import { ToastContainer, toast } from 'react-toastify'
      import 'react-toastify/dist/ReactToastify.css'
      import ScrollToTop from './Components/ScrollToTop';
      import Learn from './Components/Learn';
function App() {
  return (
    
    <Router>
              <ScrollToTop />
                  <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
                <Route path="/about" element={<AboutPage/>} />
                         <Route path="/contact" element={<Contact/>} />
                         <Route path="/projects" element={<ProjectLanding/>} />
                            <Route path="/project-post-Faruqkolawole@.com1" element={<ProjectPost/>} />
                             <Route path="/project/:projectId" element={<SingleProject/>} />
                              <Route path="/learn" element={<Learn/>} />
      </Routes>
    </Router>
  );
}

export default App;