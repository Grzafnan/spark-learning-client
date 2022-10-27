import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseSummary = () => {
  const ref = React.createRef();
  const courseData = useLoaderData();

  const { details, image_url, title, _id, student, price, level, feature } = courseData;



  return (
    <div ref={ref} className=" w-3/4 lg:w-3/5 mx-auto my-10 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <h2 className='font-semibold text-lg md:text-2xl '>{title}</h2>
        </div>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>
            <FaDownload className='text-green-600 text-2xl md:text-3xl' /></button>}
        </Pdf>

      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img src={image_url} alt="" className="block  w-full rounded-md h-72 dark:bg-gray-500" />
        </div>
        <div className="space-y-2">
          <div className='flex justify-between items-center'>
            <p className='md:text-lg font-semibold'>Level: {level}</p>
            <p className='md:text-lg font-semibold'>Student: {student}</p>
            <p className='md:text-lg font-semibold'>Fee: ${price}</p>

          </div>


          <p className="leading-snug text-justify dark:text-gray-400">{details}</p>

          <div className='pt-8'>
            <h2 className='text-xl font-semibold  underline'>You Will Gain Those Skills From This Course!</h2>
            <ul className='text-start list-disc p-6'>
              {
                feature?.map((item, idx) => <li
                  key={idx}
                  className=''
                >

                  {item}
                </li>)
              }
            </ul>

            <div className='flex justify-center'>
              <Link to={`../checkout/${_id}`} >
                <button className='bg-blue-500 text-white hover:bg-blue-600 font-semibold px-6 py-2 rounded '>Get Premium Access</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;