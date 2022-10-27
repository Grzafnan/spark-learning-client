import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const AllCourses = () => {

  const categories = useLoaderData();
  // console.log();

  return (
    <>
      <div className='md:grid md:grid-cols-12 md:gap-16 lg:gap-10 md:px-6 my-10'>
        <div className='md:grid md:col-span-3 '>
          <LeftSideNav />

        </div>
        <div className='md:grid md:col-span-9 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-4'>
          {
            categories?.map(category => <CourseCategory key={category._id} category={category} />)
          }
        </div>
      </div>
    </>

  );
};

export default AllCourses;