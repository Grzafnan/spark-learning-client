import React from 'react';

const About = () => {
  return (
    <>
      <div className=' dark:text-white dark:bg-[#2e2e2e]'>
        <div className="relative py-16 bg-gradient-to-b from-blue-700 to-blue-600 flex justify-center items-center ">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">How can we help you?</h1>
            <div className="bg-blue-800 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input type="text" placeholder="Search for answers" className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none" />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-9 flex flex-col items-center justify-center  dark:text-white dark:bg-[#2e2e2e]">
          <div role="list" className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div role="listitem" className="focus:outline-none ">
              <a href="/" className=" focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white">Getting Started</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal  dark:text-white  text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="/" className="bg-white  dark:bg-[#2e2e2e] focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white ">User Account</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal  dark:text-white text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="/" className="bg-white  dark:bg-[#2e2e2e] focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={14} cy={6} r={2} />
                      <line x1={4} y1={6} x2={12} y2={6} />
                      <line x1={16} y1={6} x2={20} y2={6} />
                      <circle cx={8} cy={12} r={2} />
                      <line x1={4} y1={12} x2={6} y2={12} />
                      <line x1={10} y1={12} x2={20} y2={12} />
                      <circle cx={17} cy={18} r={2} />
                      <line x1={4} y1={18} x2={15} y2={18} />
                      <line x1={19} y1={18} x2={20} y2={18} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white ">Product Features</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12  dark:text-white ">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="/" className="bg-white dark:bg-[#2e2e2e] focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3125 23.7188L2.0625 16.5L10.3125 9.28125M22.6875 23.7188L30.9375 16.5L22.6875 9.28125" stroke="#3730A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white ">Customization Options</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12  dark:text-white ">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="/" className="bg-white  dark:bg-[#2e2e2e] focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={3} y={5} width={18} height={14} rx={3} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                      <line x1={7} y1={15} x2="7.01" y2={15} />
                      <line x1={11} y1={15} x2={13} y2={15} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white ">Payment Gateways</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12  dark:text-white ">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="/" className="bg-white dark:bg-[#2e2e2e] focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={5} y={11} width={14} height={10} rx={2} />
                      <circle cx={12} cy={16} r={1} />
                      <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800  dark:text-white ">Security Options</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12  dark:text-white ">Get started fast with installation and theme setup instructions</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-9 md:mt-11  lg:mt-16">
            <div className="container flex justify-center mx-auto pt-10">
              <div className='w-3/4 mb-16'>
                <h1 className='text-3xl font-bold text-center'>
                  Teachers. Experts.
                </h1>
                <p className='my-4 text-justify'>
                  Our teaching staff is made up of the most passionate, energetic, and experienced pros in their field. They are constantly advancing teaching practices to keep up with a rapidly evolving industry, ensuring you're set up to excel in your new career.
                </p>

                <p className='text-justify'>
                  As a Thinkful student, you’ll also partner one-on-one with an experienced mentor who’s committed to your success in the program, and in the field. Our mentors have an average 10 years of experience and are driven to help motivated learners change their future.
                </p>
              </div>
            </div>
            <div className="w-full  dark:text-white dark:bg-[#2e2e2e] bg-gray-100 px-10 pt-10">
              <div className="container mx-auto">
                <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white  dark:text-white dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16 ">
                        <div className="font-bold text-3xl text-center pb-1">Andres Berlin</div>
                        <p className="text-gray-800  dark:text-white text-sm text-center">Chief Executive Officer</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white  dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1  dark:text-white ">Silene Tokyo</div>
                        <p className="text-gray-800 text-sm text-center  dark:text-white ">Product Design Head</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                        <div className="w-full flex justify-center pt-5 pb-5 ">
                          <a href="/" className="mx-5 ">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white    dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1  dark:text-white ">Johnson Stone</div>
                        <p className="text-gray-800 text-sm text-center  dark:text-white ">Manager Development</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white  dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1  dark:text-white ">Dean Jones</div>
                        <p className="text-gray-800 text-sm text-center  dark:text-white ">Principal Software Engineer</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1  dark:text-white ">Rachel Adams</div>
                        <p className="text-gray-800 text-sm text-center  dark:text-white ">Product Design Head</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white  dark:bg-[#2e2e2e]">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt='' className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1  dark:text-white ">Charles Keith</div>
                        <p className="text-gray-800 text-sm text-center  dark:text-white">UX Designer</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal  dark:text-white ">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            </div>
                          </a>
                          <a href="/" className="mx-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;