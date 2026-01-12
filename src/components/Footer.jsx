import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navyBlue text-white px-4 py-6">
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between sm:items-start">
        {/* Logo or Brand */}
        <div className="text-lg font-bold mb-4 sm:mb-0">
          My Portfolio
        </div>

        {/* Footer Links */}
        <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 text-white text-center sm:text-left">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-gray-300">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0 justify-center sm:justify-start">
          <a href="https://github.com/anshul-singhrajput" className="hover:text-gray-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anshul-singh-rajput-80395a251/" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Anshul_webdev" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
