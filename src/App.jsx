import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '/index.css';
import Landing from './Components/Landing';
  import Projects from './Components/Projects';
    import About from './Components/About';
      import Contact from './Components/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About/>} />
                      <Route path="/projects" element={<Projects/>} />
                         <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;