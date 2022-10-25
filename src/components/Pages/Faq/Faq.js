import React, { useState } from 'react';
import Head from "next/head";

const Faq = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" className="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
        <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
          <div className="md:py-36 py-20">
            <h1 role="heading" className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
              Frequently asked questions
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            <div className="bg-white shadow rounded p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">What are the qualifications to be a Thinkful student?</h2>
                </div>
                <button onClick={() => setBox1(!box1)} className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                  {box1 ? (
                    <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul className="list-disc">
                  <h1 className='mt-4'>Admission to any Thinkful program is subject to the following qualifications:
                  </h1>
                  <li className=' ml-6'>
                    <p className="text-base leading-normal text-gray-600 mt-4 ">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                  </li>
                  <li className='ml-6 text-base leading-normal text-gray-600'>Students must be at least 18 years old.</li>

                  <li className='text-base leading-normal text-gray-600 ml-6'>Students must have proof of high school diploma or equivalent (GED), or a diploma from an institution of higher education accredited by an association recognized by the U.S. Department of Education. Thinkful will accept an attestation of the proper educational requirements.</li>

                  <li className='text-base leading-normal text-gray-600 ml-6'>
                    Students must be proficient in written and spoken English.
                  </li>

                  <li className='text-base leading-normal text-gray-600 ml-6'>
                    Students must demonstrate operating proficiency on a computer.
                  </li>

                  <li className='text-base leading-normal text-gray-600 ml-6'> Students must demonstrate the ability to manage their time, communicate effectively with others, and accept constructive criticism.</li>

                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">What equipment do I need to get started?</h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box2 ? (
                    <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul className='list-disc'>
                  <p className='mt-4'>Thinkful does not have any physical classrooms or locations, as all our programs are entirely online. There is no physical campus and you aren’t required to attend any in person events. However, our programs do require a computer with a microphone, speakers, webcam, and high-speed internet access. We do not provide you with a computer, and every student must own or have access to a personal computer with at least 16GB RAM, at least 2.0 GHz processor (GPUs are not a requirement), and at least 256 GB HD. Additionally, the computer must be able to download applications and software; computers like Chromebooks will not work.
                  </p>
                  <p className='mt-4'>
                    For full-time programs, you're required to additionally provide the following equipment at your own cost:
                  </p>
                  <li className=' ml-6'>
                    <p className="text-base leading-normal text-gray-600 mt-4 ">A reliable Mac or PC with video capability including a webcam and microphone. Headphones are highly recommended. Macs must have the most current OS version installed, and PCs must be using Windows 10 or newer operating systems. </p>
                  </li>
                  <li className='ml-6 text-base leading-normal text-gray-600'>Reliable internet connection fast enough to stream video sessions clearly for upwards of 8 hours a day. </li>
                  <p className='mt-4'>Additionally, all Data Analytics courses require Excel in order to start the course.</p>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">Is Thinkful an accredited institution?</h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box3 ? (
                    <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 ">Thinkful, Inc. is not accredited by a regional or national accrediting agency recognized by the United States Department of Education. Thinkful, Inc. has not received a provisional approval and is not offering an unaccredited degree program. Thinkful, Inc. is not eligible to participate in federal student financial assistance programs.</p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">Do Thinkful certificates translate to credits applicable towards a Bachelor's or Master’s of Science degree?</h2>
                </div>
                <button onClick={() => setBox4(!box4)} data-menu className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                  {box4 ? (
                    <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
              {box4 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 ">Yes! Thinkful is collaborating with Southern New Hampshire University (SNHU) to offer students an efficient, skills-focused path to a college degree. Graduates of our Data Analytics, Data Science, or Software Engineering programs are now eligible to receive credits applicable towards a Bachelor’s or Master’s of Science degree at SNHU.</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;