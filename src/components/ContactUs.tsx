'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function ContactUs() {

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent!'); 
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">Name</label>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={form.subject} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-green-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-center mb-6">
            <FaMapMarkerAlt className="text-3xl text-red-500 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">Hyderabad, India</p>
          </div>
          <div className="text-center mb-6">
            <FaEnvelope className="text-3xl text-blue-500 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">mr.chandu171@gmail.com</p>
          </div>
          <div className="text-center mb-6">
            <FaPhone className="text-3xl text-green-500 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">+91 8790182862</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-700 hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-blue-400 hover:scale-110 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 transition" />
            </a>
          </div>

          {/* Google Map Embed */}
          <div className="mt-6 w-full">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8799944302534!2d78.4866718759644!3d17.385044703897237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97980f4f5b1b%3A0xf6b6c2eb4f6046b6!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
