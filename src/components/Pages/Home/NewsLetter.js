import React from 'react';

const NewsLetter = () => {
  return (
    <>
      <section className='mx-auto max-w-[1536px]' >
        <div className="md:px-12 lg:px-0 py-8 md:py-12 grid place-content-center px-4  dark:text-white dark:bg-[#2e2e2e]">
          <div className="lg:flex justify-start items-center lg:gap-28">
            <div className="">
              <h1 className="font-bold text-5xl text-gray-800  dark:text-white dark:bg-[#2e2e2e]">Newsletter</h1>
              <p className="pt-8 md:pt-4 text-justify text-gray-600  dark:text-white dark:bg-[#2e2e2e]">Sign up for our newsletter and get weekly updates. We only send emails about our latest products on the market once a week every Friday.</p>
              <div className="mt-8 md:flex justify-start md:gap-4">
                <input type="email" placeholder="Your Email" className="placeholder-gray-600 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none" />
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 border rounded-md hover:bg-blue-700 grid place-items-center font-semibold mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Subscribe</button>
              </div>
              <p className="pt-4 text-xs text-gray-600  dark:text-white dark:bg-[#2e2e2e]">Read our <u className="cursor-pointer no-underline hover:underline  dark:text-white dark:bg-[#2e2e2e]">privacy policy</u></p>
            </div>
            <div className="pt-8 lg:pt-0">
              <img src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/03/sale_25313_primary_image_wide.jpg" alt="man in black suit holding brown paper" className=" md:h-96 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;