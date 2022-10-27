import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseContainer from './CourseContainer/CourseContainer';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
  const coursesData = useLoaderData();
  // console.log(coursesData);

  return (
    <div className='md:grid md:grid-cols-12 md:gap-16 lg:gap-10 md:px-6 my-10'>
      <div className='md:grid md:col-span-3'>
        <LeftSideNav />

      </div>
      <div className='md:grid md:col-span-9 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-4'>

        {
          coursesData.map(course => <CourseContainer key={course._id
          } course={course} />)
        }

      </div>
    </div>

  );
};

export default Courses;