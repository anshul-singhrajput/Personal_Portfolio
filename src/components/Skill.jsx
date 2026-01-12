import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, image }) => {
    return (
        <motion.div 
            className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300" 
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }} // Shadow on hover
        >
            <motion.img 
                src={image} 
                alt={name} 
                className="w-16 h-16 mb-2 transition-transform duration-300" 
                whileHover={{ scale: 1.1 }} // Scale the icon on hover
            />
            <motion.p 
                className= "font-semibold transition-colors duration-300 isHovered text-white"
            >
                {name}
            </motion.p>
        </motion.div>
    );
}

export default Skill;