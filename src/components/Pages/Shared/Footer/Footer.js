import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
            className="inline-block rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
            href="#1"
            target="#jump_to_me"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <img src={logo} className="w-24" alt="" />
            </div>

            <p
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
            >
              An Online Training like in a University and pursue your career in Software Development. Stay motivated to complete your courses in the best possible manner.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul
              className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
            >
              <li>
                <Link className="text-gray-700 transition hover:text-blue-700" to="/about">
                  About
                </Link>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-blue-700" href="/">
                  Services
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-blue-700" href="/">
                  Projects
                </a>
              </li>

              <li>
                <Link className="text-gray-700 transition hover:text-blue-700" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {(new Date().getFullYear())}. All rights reserved by <a className='hover:text-blue-600 hover:underline' href="https://www.linkedin.com/in/grzafnan/" target='_blank'>Shakil Ahmmed</a>.
        </p>
      </div>
    </footer>

  );
};

export default Footer;