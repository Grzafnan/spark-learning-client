import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import HomeCards from './HomeCards';
import NewsLetter from './NewsLetter';
import Testimonials from './Testimonials';

const Home = () => {

  return (
    <div className="pb-16 bg-gray-100 dark:bg-[#2e2e2e]">
      <Banner />
      <HomeCards />
      <Testimonials />
      <NewsLetter />
    </div>

  );
};

export default Home;