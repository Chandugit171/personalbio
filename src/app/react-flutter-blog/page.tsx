'use client'

import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const BlogPost = () => {

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
        React Native vs Flutter: Which One Should You Choose?
      </h1>
      <p className="text-gray-600 mb-4">
        Mobile app development has evolved, and two frameworks dominate the industry: React Native and Flutter. Both have their strengths, but which one is right for your project? Let's compare.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Performance</h2>
      <p className="text-gray-600 mb-4">
        Flutter is known for its high performance since it compiles to native ARM code. React Native, on the other hand, relies on a bridge for communication, which can introduce some performance overhead.
      </p>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// React Native Example
default function App() {
  return <Text>Hello, React Native!</Text>;
}`}
      </pre>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// Flutter Example
import 'package:flutter/material.dart';
void main() {
  runApp(Text('Hello, Flutter!'));
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Development Speed</h2>
      <p className="text-gray-600 mb-4">
        React Native uses JavaScript and offers a fast development cycle with hot reloading. Flutter also supports hot reload but requires learning Dart, which might be a barrier for some developers.
      </p>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// React Native Hot Reload Example
function App() {
  const [count, setCount] = useState(0);
  return <Button title={count} onPress={() => setCount(count + 1)} />;
}`}
      </pre>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// Flutter Hot Reload Example
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: Text('Click Me'),
    );
  }
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. UI & Customization</h2>
      <p className="text-gray-600 mb-4">
        Flutter provides a rich set of widgets that ensure a consistent UI across platforms. React Native leverages native components, making apps feel more platform-specific but sometimes requiring extra effort for customization.
      </p>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// React Native Button
<Button title="Press Me" onPress={() => alert('Pressed!')} />;`}
      </pre>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// Flutter Button
ElevatedButton(
  onPressed: () {
    print('Pressed!');
  },
  child: Text('Press Me'),
);`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Community & Ecosystem</h2>
      <p className="text-gray-600 mb-4">
        React Native has a larger ecosystem and community due to JavaScript’s popularity. Flutter is growing rapidly and backed by Google, making it a strong contender.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Conclusion</h2>
      <p className="text-gray-600 mb-4">
        If you want a mature ecosystem and JavaScript compatibility, React Native is a great choice. If you need superior performance and a highly customizable UI, Flutter might be the way to go.
      </p>
    </div>
  );
};

export default BlogPost;
