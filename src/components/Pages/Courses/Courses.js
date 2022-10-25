import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses/AllCourses';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {

  const courses = useLoaderData();
  // console.log(courses);

  return (
    <div className='grid grid-cols-12 gap-20'>
      <div className='grid col-span-3 '>
        <LeftSideNav />

      </div>
      <div className='grid col-span-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4'>
        {
          courses.map(course => <AllCourses key={course._id} course={course} />)
        }
      </div>
    </div>

  );
};

export default Courses;