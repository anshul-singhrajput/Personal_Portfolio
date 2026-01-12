import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import profile from '../assets/about.png'; // Ensure this path is correct
import { Element } from 'react-scroll'; // Import Element from react-scroll

const About = () => {
  return (
    <Element name="about">
      <motion.section
        initial={{ opacity: 0 }} // Fade-in for the whole section
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center px-4 sm:px-8 md:px-10 py-10 md:py-20 bg-gray-900 text-white"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Slide-in from the left
          animate={{ x: 0, opacity: 1 }} // Slide to original position
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center mb-10 mt-10 md:mt-0 md:mb-0 md:mr-6"
        >
          {/* Background Frame */}
          <div
            className="about-bg-frame absolute top-5 bg-gray-950 rounded-lg shadow-lg w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[390px] lg:h-[360px]"
          ></div>

          {/* Image with hover and click effects */}
          <motion.img
            src={profile}
            alt="Anshul Singh Rajput"
            className="relative rounded-lg object-cover w-40 h-auto sm:w-56 sm:h-auto md:w-64 md:h-auto lg:w-[450px]"
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Slide-in from the right
          animate={{ x: 0, opacity: 1 }} // Slide to original position
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-4 max-w-md text-center md:text-left md:ml-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            About Me
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Name:</span> Anshul Singh Rajput
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Date of Birth:</span> 23 September, 2000
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Address:</span> Janta Colony, Raipur, Chhattisgarh, India
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Zip Code:</span> 492001
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:anshulsinghrajput29@gmail.com"
                className="text-blue-400 hover:underline ml-1"
              >
                anshulsinghrajput29@gmail.com
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Phone:</span> 9630572576, 9575864397
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Skills:</span> JavaScript, React, Node.js, SQL Server,Asp.net Core Web Api
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Hobbies:</span> Travel, Badminton
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div>
              <span className="font-semibold">Future Goals:</span> Focused on mastering advanced web technologies and delivering high-quality, scalable applications for a global audience
            </div>
          </motion.div>

          <div className="py-6 sm:py-10">
            <p className="text-xl sm:text-2xl">
              <span className="font-semibold text-yellow-500">05</span> Projects Completed
            </p>
          </div>
        </motion.div>
      </motion.section>
    </Element>
  );
};

export default About;