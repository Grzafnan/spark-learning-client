import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const LeftSideNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/courses-categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div>
      <h2>All Categories {categories.length}</h2>
    </div>
  );
};

export default LeftSideNav;