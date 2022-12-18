import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <section class="bg-gray-100 dark:text-white dark:bg-[#2e2e2e] lg:-mt-[81px]">
        <div
          class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Make The World A Better
              <strong class="font-extrabold mt-2 text-blue-700 sm:block">
                Place With Developer.
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link to='/courses'
                class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                to="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;