import React from 'react';
import { motion } from 'framer-motion';

// Social media and contact information
const contactInfo = {
  github: "https://github.com/ProfessorAyush",
  linkedin: "https://www.linkedin.com/in/ayush-aggarwal-4a56b6230/",
  email: "mailto:mailayush1234@gmail.com",
  instagram: "https://www.instagram.com/ayushbania_/",
};

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-teal-400">Connect With Me</h2>
        <p className="text-base md:text-md text-center mb-8 md:mb-10">Feel free to connect with me on any platform below!</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-12">
          {/* Social Media Links */}
          <motion.div
            className="flex flex-col items-center mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Connect With Me</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-4">
              <motion.a
                href={contactInfo.github}
                className="group relative bg-gray-800 p-4 rounded-full border-4 border-transparent hover:border-teal-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 0 0-3.09 19.6c.49.09.67-.21.67-.47v-1.68c-2.75.6-3.33-1.32-3.33-1.32-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.61 1.03 1.61 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.63 0 0 .84-.27 2.76 1.03.8-.22 1.67-.33 2.53-.33.85 0 1.73.12 2.53.33 1.91-1.3 2.76-1.03 2.76-1.03.55 1.36.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.82-2.35 4.67-4.57 4.93.36.31.68.93.68 1.87v2.77c0 .26.18.57.67.47A10 10 0 0 0 12 2z" />
                </svg>
              </motion.a>

              <motion.a
                href={contactInfo.linkedin}
                className="group relative bg-gray-800 p-4 rounded-full border-4 border-transparent hover:border-teal-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h8zM6 10a2 2 0 1 1 4 0v8a2 2 0 0 1-4 0v-8zm4 2a2 2 0 1 1 4 0v8a2 2 0 0 1-4 0v-8z" />
                </svg>
              </motion.a>

              <motion.a
                href={contactInfo.email}
                className="group relative bg-gray-800 p-4 rounded-full border-4 border-transparent hover:border-teal-400 transition-all duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12l-2-2 2-2M2 12l2-2-2-2M2 12l20 0M22 12l-20 0" />
                </svg>
              </motion.a>

              <motion.a
                href={contactInfo.instagram}
                className="group relative bg-gray-800 p-4 rounded-full border-4 border-transparent hover:border-teal-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm6 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-6 2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
                </svg>
              </motion.a>
            </div>
            <p className="text-sm md:text-base text-center mt-2">
              Email:{" "}
              <a
                href={contactInfo.email}
                className="text-teal-400 hover:text-teal-500"
              >
                {contactInfo.email.replace("mailto:", "")}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
