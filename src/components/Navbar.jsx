import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo_profile_copy.PNG';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 w-full sticky top-0 z-50 shadow-lg"> {/* Sticky Navbar */}
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={logo} className="w-16 h-16 rounded-full border-0 border-white" alt="logo" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-gray-300"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-gray-300"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-gray-300"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-gray-300"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-gray-300"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Download Resume Button */}
        <a
          href="/Anshul-WebDev.pdf"
          download="Anshul_Singh_Rajput_Resume.pdf"
          className="hidden md:block bg-white text-navyBlue px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="container md:hidden flex flex-col items-center space-y-4 mt-4 text-white w-full absolute bg-gray-900 bg-opacity-90 z-50">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <a
              href="/Anshul-WebDev.pdf"
              download="Anshul_Singh_Rajput_Resume.pdf"
              className="bg-white text-navyBlue px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;