import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { projects } from "../assets/projects.js"; // Import from the .js file
import { Element } from 'react-scroll'; // Import Element from react-scroll

const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <Element name="projects">
      <section className="bg-gray-900 text-white py-16 px-10">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">FEATURED PROJECTS</h2>
            <p className="text-gray-400">These Are My Recent Works Which I Completed.</p>
          </div>
          <Link to="/projects" className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700">
            View All
          </Link>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.05, // Scale up the card on hover
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)", // Add shadow on hover
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }} // Scale image on hover
                transition={{ duration: 0.3 }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex space-x-4 mt-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 bg-gray-700 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }} // Scale button on hover
                    transition={{ duration: 0.2 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 bg-gray-700 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }} // Scale button on hover
                    transition={{ duration: 0.2 }}
                  >
                    Code
                  </motion.a>
                </div>
                <Link
                  to={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}
                  className="text-red-500 mt-4 inline-block group-hover:underline"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }} // Scale link on hover
                    transition={{ duration: 0.2 }}
                  >
                    Know More →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Element>
  );
}

export default Projects;