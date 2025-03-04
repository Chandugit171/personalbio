'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Redux tool kit in react and react native',
    description: 'A guide to creating smooth and performant animations in React Native',
    image: 'data:image/png;base64,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', // Google image alternative
    link: '/redux-tool-blog',
  },
  {
    id: 2,
    title: 'Building Scalable Web Apps with Next.js',
    description: 'Discover best practices for structuring and optimizing your Next.js applications.',
    image: 'data:image/png;base64,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',
    link: '/nextjs-blog',
  },
  {
    id: 3,
    title: 'Flutter vs React Native: A Developer’s Perspective',
    description: 'A deep dive into the pros and cons of Flutter and React Native.',
    image: 'data:image/png;base64,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',
    link: '/react-flutter-blog',
  },
];

export default function BlogSection() {
  return (
    <section id ="blog" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Latest Blogs
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <Link href={blog.link} passHref>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">{blog.description}</p>
                  <motion.span
                    className="mt-4 text-blue-600 dark:text-blue-400 font-medium inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Read More →
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

