import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen custom-app-bg">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      {/* <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
