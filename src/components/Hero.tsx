'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id ="about" className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-24 dark:bg-gray-900 ">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          I am a passionate <strong>Frontend Mobile and Web Developer</strong> with experience in building intuitive, high-performance applications using <strong>React Native and React</strong>. 
          I specialize in crafting seamless user experiences for both mobile and web platforms.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg mb-6">
          <li><strong>Mobile Development:</strong> React Native</li>
          <li><strong>Web Development:</strong> React, JavaScript, HTML, CSS</li>
          <li><strong>State Management:</strong> Redux, Context API</li>
          <li><strong>API Integration:</strong> REST & GraphQL</li>
          <li><strong>UI/UX:</strong> Responsive Design, Material UI, Tailwind CSS</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I enjoy solving complex problems, optimizing performance, and ensuring applications are both functional and visually appealing.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
      <Image 
  src="/perfect.jpg" 
  alt="Profile" 
  width={900} 
  height={400} 
  className="rounded-lg shadow-lg"
/>

      </div>
    </section>
  );
}
