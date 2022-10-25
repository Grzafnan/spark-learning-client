import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className=" ">
      <div className="flex items-center justify-center py-12 h-screen">
        <div className="flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
            <span className='text-xl font-bold'> {error.status}</span>
            <p className="px-4 pb-10 text-md italic font-semibold leading-none text-center text-red-600">  {error.message || error.statusText} </p>
            <Link to='/'>
              <button className="mx-4 h-10 px-4 border rounded-md text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-800">Go Back To Homepage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;