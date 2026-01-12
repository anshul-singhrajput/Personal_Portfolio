import React from 'react';
import { skills } from "../assets/projects.js"; 
import Skill from '../components/Skill.jsx';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Element } from 'react-scroll';

const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const categoryVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <Element name="skills">
    <section className="bg-gray-900 text-white py-16 px-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">MY SKILLS</h2>
        <p className="text-gray-400">Technologies and tools I work with</p>
      </div>

      {/* Skills Grid by Category */}
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.keys(skills).map((category) => (
          <motion.div key={category} variants={categoryVariants}>
            <h3 className="text-2xl font-semibold text-red-500 mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills[category].map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants} 
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 5, 
                    backgroundColor: "#1f2937",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Shadow on hover
                  }} 
                  transition={{ duration: 0.3 }}
                  initial={{ backgroundColor: "transparent" }} // Initial background color
                  className="p-4 rounded-lg transition-all duration-300"
                >
                  <Skill name={skill.name} image={skill.image} isHovered={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </Element>
  );
}

export default Skills;