import React from 'react';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
  return (

    <div className='grid grid-cols-12 px-20'>
      <div className='grid col-span-4'>
        <LeftSideNav />
      </div>
      <div className='grid col-span-8'>
        <h2>All Courses</h2>
      </div>
    </div>

  );
};

export default Courses;