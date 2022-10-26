import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="mb-16 min-h-screen">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400 italic">
                Spark Learning
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Build up</span>
              </span>{' '}
              a person to be a professional programmer
            </h2>
            <p className="text-justify text-gray-600 ">
              Become a remote software developer, no matter where you are. Apply now, no upfront costs! Work on real world projects with your coding partner. Connect with global opportunities! $0 upfront cost. Global community support. Dedicated career coaching. Do it at Your Own Place.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link to='/courses'>
              <button
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
            </Link>
            <Link
              to="/about"
              aria-label="About us"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0 py-10 md:py-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Make it better
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Do it faster
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Working harder
            </p>
          </div>
        </div>
      </div>
      <div >
        <div className="mx-4 md:mx-12 py-8 md:py-12 grid place-content-center px-4 md:px-0">
          <div className="lg:flex justify-start items-center lg:gap-28">
            <div className="">
              <h1 className="font-bold text-5xl text-gray-800">Newsletter</h1>
              <p className="pt-8 md:pt-4 text-justify text-gray-600">Sign up for our newsletter and get weekly updates. We only send emails about our latest products on the market once a week every Friday.</p>
              <div className="mt-8 md:flex justify-start md:gap-4">
                <input type="email" placeholder="Your Email" className="placeholder-gray-600 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none" />
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 border rounded-md hover:bg-blue-700 grid place-items-center font-semibold mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Subscribe</button>
              </div>
              <p className="pt-4 text-xs text-gray-600">Read our <u className="cursor-pointer no-underline hover:underline">privacy policy</u></p>
            </div>
            <div className="pt-8 lg:pt-0">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="man in black suit holding brown paper" className=" md:h-96 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;