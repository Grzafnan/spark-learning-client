import React from 'react';

const HomeCards = () => {

  const data = [
    {
      "id": 1,
      "title": "UNDERSTAND PROGRAMMING",
      "description": " Get an overview of computer science, web development, and data science, as well as popular languages like JavaScript and Python.",
    },
    {
      "id": 2,
      "title": "WRITE BASIC CODE",
      "description": " Apply key programming concepts like variables and functions by writing your first lines of code.",
    },
    {
      "id": 3,
      "title": "FIND YOUR FUTURE CAREER",
      "description": " Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.",
    },
    {
      "id": 4,
      "title": "Get in-depth knowledge.",
      "description": "  Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer.",
    },
    {
      "id": 5,
      "title": "Get a helpful roadmap.",
      "description": " Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time, all in one place..",
    },
    {
      "id": 6,
      "title": "Get job ready.",
      "description": " Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job.",
    }
  ]



  return (
    <>
      <section class="bg-gray-100 text-black dark:text-white dark:bg-[#2e2e2e]">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Good code is its documentation.
            </h2>

            <p class="mt-4 ">
              You really feel like there's nothing you can't learn, which in turn builds so much confidence in your skills and gives the momentum to keep learning.
            </p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              data?.map(card =>
                <a
                  key={card?.id}
                  class="block  dark:bg-gray-900  rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/50"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 class="mt-4 text-xl font-bold">
                    {card?.title}
                  </h2>

                  <p class="mt-1 text-sm ">
                    {card?.description}
                  </p>
                </a>
              )
            }
          </div>
        </div>
      </section>

    </>
  );
};

export default HomeCards;