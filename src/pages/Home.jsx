import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import profile from '../assets/bg-profile.png';
import '../App.css';
import { Element } from 'react-scroll'; // Import Element from react-scroll

const Home = () => {
  const name = "Anshul Singh Rajput".split(""); // Split the name into individual characters

  return (
    // Wrap the section with Element
    <Element name="home"> 
      <motion.section
        initial={{ opacity: 0 }} // Fade-in for the whole section
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="section flex flex-col md:flex-row md:items-center md:justify-between px-6 sm:px-8 md:px-10 py-20 bg-gray-900 text-white space-y-10 md:space-y-0 overflow-visible"
      >
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Slide-in from the left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col space-y-4 max-w-md ml-0 md:ml-28"
        >
          <p className="text-sm text-gray-400 uppercase">Welcome to my world</p>

          {/* Animated Name */}
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Hi, I’m{' '}
            {name.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }} // Initial position above and transparent
                animate={{ opacity: 1, y: 0 }} // Fade in and slide down into place
                transition={{
                  duration: 0.5,
                  delay: i * 0.1, // Sequential delay for each character
                  repeat: Infinity, // Repeat the animation
                  repeatType: "loop", // Loop the animation
                  repeatDelay: 2, // Delay before repeating
                }}
                className="text-pink-500"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Designation Animation */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: -50 }} // Initially above the normal position
            animate={{ opacity: 1, y: 0 }} // Slide down into place
            transition={{ duration: 1, delay: 0.4 }}
          >
            a Full Stack Developer
          </motion.h2>

          <p className="text-gray-400 mt-4">
          I work as a .NET Web API Backend Developer at <strong>CSMCL</strong> , contributing to enterprise-level systems by building secure, scalable Web APIs using ASP.NET Core, ADO.NET, and SQL Server, with a strong focus on reliability, performance, and maintainable code.
          </p>

          {/* Connect With Me Section */}
          <div className="mt-6">
            <motion.p
              className="mt-16 text-3xl sm:text-3xl md:text-4xl font-semibold mb-3"
              whileHover={{ scale: 1.1, color: '#fbbf24', transition: { duration: 0.3 } }} // Scale and change color on hover
            >
              Connect With Me
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} // Pop-in effect for icons
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex space-x-4"
            >
              <a
                href="https://www.instagram.com/_.rebel_ansh_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anshul-singh-rajput-80395a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/anshul-singhrajput"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://x.com/Anshul_webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Picture Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Scale-up animation for the profile picture
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="right mt-10 md:mr-40 md:mt-0 relative flex items-center justify-center"
        >
          {/* Background Frame */}
          <div className="tablet-profile absolute top-5 bg-gray-950 rounded-lg shadow-lg w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"></div>

          {/* Profile Picture with Hover Effect */}
          <motion.img
            src={profile}
            alt="Profile"
            className="relative rounded-lg object-cover w-48 h-auto sm:w-60 md:w-64 lg:w-80 xl:w-96"
            whileHover={{ scale: 1.1 }} // Scale up the image when hovered
            transition={{ type: 'spring', stiffness: 300 }} // Smooth transition effect
          />
        </motion.div>
      </motion.section>
    </Element>
  );
};

export default Home;
