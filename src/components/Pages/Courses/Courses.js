import React, { useContext, useEffect, useState } from 'react';
import CourseContainer from './CourseContainer/CourseContainer';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const Courses = () => {
  const { loading, setLoading } = useContext(AuthContext)

  const [courses, setCourses] = useState();
  const [courseCard, setCourseCard] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch(`https://xplore-server-side-grzafnan.vercel.app/courses`)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setCourseCard(data)
        setLoading(false)
      })
  }, [setLoading])


  const handelCourses = (category) => {
    if (category !== '07') {
      const filter = courses.filter(c => c.category_id
        === category);
      setCourseCard(filter)
    }
    else {
      setCourseCard(courses)
    }
  }



  return (
    <>
      {
        loading ? <Loader /> : <>
          <div className='px-6 grid grid-cols-12  gap-10 md:px-6 py-10 dark:text-white dark:bg-[#2e2e2e]'>

            <div className='col-span-12 md:col-span-4 lg:col-span-3 dark:text-white dark:bg-[#2e2e2e]'>
              <LeftSideNav handelCourses={handelCourses} />
            </div>

            <div className='md:grid col-span-12 md:col-span-8 lg:col-span-9 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3 dark:text-white dark:bg-[#2e2e2e]'>
              {
                courseCard?.map(course => <CourseContainer key={course._id
                } course={course} />)
              }
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Courses;