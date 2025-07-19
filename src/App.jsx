import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '/index.css';
import Landing from './Components/Landing';
  import Work from './Components/Projects';
    import Blog from './Components/About';
      import Contact from './Components/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
                <Route path="/work" element={<Work/>} />
                      <Route path="/blog" element={<Blog/>} />
                         <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;