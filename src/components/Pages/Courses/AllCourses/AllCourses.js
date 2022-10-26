import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const AllCourses = () => {

  const categories = useLoaderData();
  // console.log();

  return (
    <>
      <div className='grid grid-cols-12 gap-20'>
        <div className='grid col-span-3 '>
          <LeftSideNav />

        </div>
        <div className='grid col-span-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4'>


          {
            categories?.map(category => <CourseCategory key={category._id} category={category} />)
          }
        </div>
      </div>
    </>

  );
};

export default AllCourses;