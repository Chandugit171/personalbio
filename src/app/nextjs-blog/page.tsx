'use client'

import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";

const NextJSBlog = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <button 
        onClick={() => router.back()} 
        className=" text-black px-4 py-2 rounded-md mb-4"
      >
        <div className="flex items-center">
        <FaAngleLeft/>
         <p>Back</p>

        </div>
     
      </button>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Next.js 15: Project Setup & Routing
      </h1>
      <p className="text-gray-600 mb-4">
        Next.js 15 brings powerful features for building full-stack web applications. Let's explore setting up a project, routing, API handling, and rendering strategies.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Installing Next.js 15</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`npx create-next-app@latest my-next-app --ts`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Routing in Next.js 15</h2>
      <p className="text-gray-600 mb-4">
        Next.js 15 uses the App Router (`app/` directory) by default. You can create server and client components for better performance and SEO.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">a) Defining a Page Route</h3>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// app/page.tsx (Home Page)
export default function Home() {
  return <h1>Welcome to Next.js 15!</h1>;
}`}
      </pre>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">b) Navigating Between Pages</h3>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Go Back</Link>
    </div>
  );
}`}
      </pre>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">c) Dynamic Routes</h3>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// app/blog/[id]/page.tsx
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  return <h1>Blog Post ID: {params.id}</h1>;
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. API Routes in Next.js</h2>
      <p className="text-gray-600 mb-4">
        API routes can be created inside the `app/api` folder using **Route Handlers**.
      </p>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello from Next.js API!' });
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Rendering Strategies</h2>
      <p className="text-gray-600 mb-4">
        Next.js supports multiple rendering strategies:
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Static Rendering (default for React components)</li>
        <li>Server Rendering (used in server components)</li>
        <li>Client Rendering (for interactive UI components)</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Example: Fetching Data in a Server Component</h3>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// app/users/page.tsx (Server Component)
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Conclusion</h2>
      <p className="text-gray-600 mb-4">
        Next.js 15 provides powerful routing, API capabilities, and flexible rendering options. Whether you're building static sites, full-stack apps, or server-rendered apps, Next.js is a great choice!
      </p>
    </div>
  );
};

export default NextJSBlog;
