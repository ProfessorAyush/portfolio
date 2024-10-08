import React from 'react';
import { motion } from 'framer-motion';
import image1 from './image1.png';

const projects = [
  {
    title: "Ashprint",
    description: "Ashprint is an innovative automatic printing solution designed using a Raspberry Pi and Python. This project automates the entire printing process, eliminating the need for manual intervention in managing print jobs",
    image: image1,
    link: "https://ashprint-frontend.onrender.com/",
  },
  {
    title: "NewsMoneky",
    description: "An advanced productivity tool for managing tasks with features like to-do lists, reminders, and progress tracking.",
    image: "https://via.placeholder.com/400x300?text=TaskMaster",
    link: "#",
  },
  {
    title: "PhotoGenius",
    description: "AI-driven photo editing software that enhances images with advanced filters and editing tools.",
    image: "https://via.placeholder.com/400x300?text=PhotoGenius",
    link: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110"
        />
        <h3 className="text-3xl font-extrabold mb-2 text-teal-400">{project.title}</h3>
      </a>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute bottom-4 left-4 text-teal-400 hover:text-teal-300 transition-colors"
      >
        Go to Project
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-60" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-teal-400">Projects</h2>
        <p className="text-lg text-center mb-12">Discover some of my most recent and impactful projects. Click on the links to explore further.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
