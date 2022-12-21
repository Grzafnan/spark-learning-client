
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const pagination = {
    clickable: true
  }


  const data = [
    {
      "id": 1,
      "title": "Be Confident",
      "description": "Programming Hero, Helped me to bloom myself for the carrier by providing lots of guide and instructions. Specially SCIC and BootsCamps are awesomeness! Learned a lot from SCIC and Carrier Buildup bootcamp thats uncountable",
      'name': "Mahafujur Rahman",
    },
    {
      "id": 2,
      "title": "Stayin' Alive",
      "description": "Programming Hero makes me a hard worker and dedicated. The teaching environment is very organized. The support team is beneficial.That was an amazing journey with programming hero.",
      'name': "TF Mahabub",
    },
    {
      "id": 3,
      "title": "Stay Fueled",
      "description": "Consistency is the most important thing for a programmer. Before joining programming hero web development course. I tried to learn web development but the thing was I always loosed my consistency and It was frustrating. Then comes programming hero form the day one the course started programming hero helped me in every aspect of learning web development.",
      'name': "MD Rakibul Hasan",
    },
    {
      "id": 4,
      "title": "Be More Mindful",
      "description": "Programming Hero is not just a course. It is a complete guideline for the career. If you are determined, you'll surely get a path In Sha Allah. You will learn from scratch and becomes an entry-level developer. Thanks to Almighty Allah for making me suitable for a journey with Programming Hero.",
      'name': "MD Maruf",
    },
  ]







  return (
    <>
      <section
        class="mx-auto max-w-[1536px] px-4 py-16 sm:px-6 sm:py-24  lg:pl-8 lg:pr-0"
      >
        <div
          class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h2 class="text-3xl dark:text-white font-bold tracking-tight sm:text-4xl">
              Don't just take our word...
              <br class="hidden sm:block lg:hidden" />
              Reviews from Successful Students
            </h2>

            <p class="mt-4 text-gray-500 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div class="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                class="prev-button rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <span class="sr-only">Previous Slide</span>
                <svg
                  class="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>

              <button
                class="next-button rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <span class="sr-only">Next Slide</span>
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="-mx-6 lg:col-span-2 lg:mx-0">
            <div class="swiper-container !overflow-hidden">
              <div class="swiper-wrapper">
                {/* <div class="swiper-slide">
                   
                  </div> */}
                <Swiper className="mySwiper"
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={32}
                  breakpoints={
                    {
                      640: {
                        centeredSlides: true,
                        slidesPerView: 1.25,
                      },
                      1024: {
                        centeredSlides: false,
                        slidesPerView: 1.5,
                      }
                    }
                  }
                  navigation={
                    {
                      nextEl: '.next-button',
                      prevEl: '.prev-button',
                    }
                  }
                  pagination={pagination}
                  modules={[Navigation, Pagination]}
                >
                  {
                    data?.map(d => <SwiperSlide key={d?.id}>
                      <blockquote
                        class="flex h-full flex-col justify-between bg-white  dark:bg-gray-900 p-12"
                      >
                        <div>
                          <div class="flex gap-0.5 text-green-500">
                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>

                          <div class="mt-4">
                            <p class="text-2xl font-bold text-blue-600 sm:text-3xl">
                              {d?.title}
                            </p>

                            <p class="mt-4 leading-relaxed text-gray-500 dark:text-white">
                              {d?.description}
                            </p>
                          </div>
                        </div>

                        <footer class="mt-8 text-sm text-gray-500 dark:text-white">
                          &mdash; {d?.name}
                        </footer>
                      </blockquote>
                    </SwiperSlide>
                    )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            class="prev-button rounded-full border border-blue-600 p-4 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <svg
              class="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <button

            aria-label="Next slide"
            class=" next-button rounded-full border border-blue-600 p-4 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </section>

    </>

  );
};

export default Testimonials;