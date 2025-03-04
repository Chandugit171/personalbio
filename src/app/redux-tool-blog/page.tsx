'use client'

import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";
const ReduxSetupBlog = () => {
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
        Setting Up Redux in React and React Native
      </h1>
      <p className="text-gray-600 mb-4">
        Redux is a powerful state management library that helps maintain application state in a predictable way. Here’s how you can set up Redux in both React and React Native.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Installing Redux</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// Install Redux and React-Redux
npm install redux react-redux

// If using Redux Toolkit
npm install @reduxjs/toolkit`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Creating the Redux Store</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Creating a Redux Slice</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Using Redux in a Component</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Integrating Redux with React Native</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
        {`// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Conclusion</h2>
      <p className="text-gray-600 mb-4">
        Setting up Redux in both React and React Native follows a similar approach. Using Redux Toolkit simplifies state management, making it easier to scale applications efficiently.
      </p>
    </div>
  );
};

export default ReduxSetupBlog;
