'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
   // Function to smoothly scroll to Contact Us section
   const handleScrollToContact = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      await router.push('/'); // Navigate to home page
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Delay to ensure navigation completes
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer dark:text-white">mr.chandudev</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-300">About</Link>
          <Link href="/blogs" className="hover:text-blue-500 dark:hover:text-blue-300">Blogs</Link>
          <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</Link>
          <Link href="/contactus" className="hover:text-blue-500 dark:hover:text-blue-300">Contact Us</Link>
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
            <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/blogs" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-300" onClick={() => setIsOpen(false)}>Projects</Link>
            <a 
            href="#contact"
            className="text-red-500 font-semibold hover:text-red-700 transition-colors"
            onClick={handleScrollToContact}
          >
            Contact Us
          </a>
          </div>
        </div>
      )}
    </nav>
  );
}
