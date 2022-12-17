import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseSummary = () => {
  const ref = React.createRef();
  const courseData = useLoaderData();

  const { details, image_url, title, _id, student, price, level, feature } = courseData;

  console.log(courseData);

  return (
    <>
      <section className='dark:bg-[#2e2e2e] dark:text-gray-100'>
        <div ref={ref} class="relative mx-auto max-w-screen-xl px-4 py-10">
          <div className='flex justify-between items-start md:items-center'>
            <h1 class="text-2xl font-bold lg:text-3xl">
              {title}
            </h1>
            <Pdf targetRef={ref} filename={title}>
              {({ toPdf }) => <button onClick={toPdf}>
                <FaDownload title='Download Course Details' className='text-green-600 text-2xl md:text-3xl' /></button>
              }
            </Pdf>
          </div>
          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt="Tee"
                  src={image_url}
                  class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />
              </div>
            </div>

            <div class="lg:sticky lg:top-20 lg:pt-8">
              <div className='md:w-2/4 lg:w-full md:mx-auto lg:mx-0 flex lg:flex-col justify-between items-center lg:justify-start lg:items-start gap-6'>
                <div className='w-full flex items-center lg:justify-between gap-4'>
                  <p className='text-lg font-semibold'>
                    Level
                  </p>
                  <span
                    class="whitespace-nowrap rounded-full bg-blue-100 px-3 py-0.5 text-md font-semibold text-blue-700"
                  >
                    {level}
                  </span>
                </div>
                <div className='w-full flex items-center lg:justify-between gap-4'>
                  <p className='text-lg font-semibold'>
                    Student
                  </p>
                  <span
                    class="whitespace-nowrap rounded-full bg-blue-100 px-3 py-0.5 text-md font-semibold text-blue-700"
                  >
                    {student}
                  </span>
                </div>
              </div>
              <div className='mt-6 lg:mt-96'>
                <p class="text-xl font-bold mb-5">Price: ${price}</p>
                <Link to={`../checkout/${_id}`} >
                  <button
                    type="submit"
                    class="w-full rounded bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                  >
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>

            <div class="lg:col-span-3">
              <div
                class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl"
              >
                <p>
                  {details}
                </p>
                <br />
                <h2 className='text-xl font-semibold text-blue-600 mb-1'>
                  You Will Gain Those Skills From This Course!
                </h2>
                <ul className='text-start list-disc px-6'>
                  {
                    feature?.map((item, idx) => <li
                      key={idx}
                      className=''
                    >

                      {item}
                    </li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CourseSummary;