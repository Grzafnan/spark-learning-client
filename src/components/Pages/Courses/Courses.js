import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses/AllCourses';
import CourseContainer from './CourseContainer/CourseContainer';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
  const coursesData = useLoaderData();
  // console.log(coursesData);

  return (
    <div className='md:grid md:grid-cols-12 gap-20 my-10'>
      <div className='grid col-span-3 '>
        <LeftSideNav />

      </div>
      <div className='md:grid md:col-span-9 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-4 w-full'>

        {
          coursesData.map(course => <CourseContainer key={course._id
          } course={course} />)
        }

      </div>
    </div>

  );
};

export default Courses;