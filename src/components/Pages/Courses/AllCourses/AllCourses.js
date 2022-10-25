import React from 'react';

const AllCourses = ({ course }) => {
  // console.log(course);

  const { category_id, details, image_url, level, price, title, _id } = course;
  return (

    <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 shadow-xl">
      <img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      <div className="flex flex-col justify-between p-2 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{title.length > 25 ? title.slice(0, 25) : title}</h2>
          <p className="dark:text-gray-100 ">{details.length > 100 ? details.slice(0, 100) : details}</p>
        </div>
      </div>
      <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-900">See Details</button>
    </div>

  );
};

export default AllCourses;