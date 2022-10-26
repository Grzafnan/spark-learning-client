import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses/AllCourses';
import CourseContainer from './CourseContainer/CourseContainer';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
  const coursesData = useLoaderData();
  // console.log(coursesData);

  return (
    <div className='grid grid-cols-12 gap-20'>
      <div className='grid col-span-3 '>
        <LeftSideNav />

      </div>
      <div className='grid col-span-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4'>


        {/* <Outlet /> */}

        {
          coursesData.map(course => <CourseContainer key={course._id
          } course={course} />)
        }



      </div>
    </div>

  );
};

export default Courses;