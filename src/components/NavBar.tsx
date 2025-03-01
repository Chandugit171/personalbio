'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer dark:text-white">mr.chandudev</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">About</a>
          <a href="#blog" className="hover:text-blue-500 dark:hover:text-blue-300">Blogs</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
          <a 
              href="#contact"
className="hover:text-blue-500 dark:hover:text-blue-300"
             
            >
              Contact Us
            </a>
        </div>
        <div className="flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {resolvedTheme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          )}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4">
          <div className="flex flex-col space-y-4 items-center">
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="#blog" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>Blogs</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>Projects</a>
            <a
            href="#contact"
            className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
          </div>
        </div>
      )}
    </nav>
  );
}
