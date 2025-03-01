'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div 
          className="text-xl font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Chandra Obulesu Muchhumarri.dev
        </motion.div>

        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#blog" className="hover:text-blue-400 transition">Blogs</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contact" className="hover:text-blue-400 transition">Contact Us</a>
            </motion.li>
          </ul>
        </nav>

        <div className="mt-4 md:mt-0 flex space-x-4">
          <motion.a href="https://www.linkedin.com/in/chandra-obulesu-muchummari-822609255/" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }} className="text-blue-500">
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }} className="text-blue-400">
            <FaTwitter className="text-2xl" />
          </motion.a>
          <motion.a href="https://github.com/Chandugit171" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }} className="text-white">
            <FaGithub className="text-2xl" />
          </motion.a>
        </div>
      </motion.div>

      {/* Copyright Text */}
      <motion.div 
        className="text-center text-sm mt-6 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        © {new Date().getFullYear()} chandra obulesu.dev. All rights reserved.
      </motion.div>
    </footer>
  );
}
