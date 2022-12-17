import React from 'react';
import './CourseContainer.css'
import { Link } from 'react-router-dom';

const CourseContainer = ({ course }) => {

  const { category_id, details, image_url, level, price, title, _id } = course;

  return (
    <article class="card card--1 mb-10 md:mb-0">
      <div class="card__img">
        <img src={image_url} alt={title} />
      </div>
      <Link to={`/course/${_id}`} href="#" class="card_link">
        <div class="card__img--hover">
          <img src={image_url} alt={title} />
        </div>
        <div class="card__info">
          <h3 class="card__title">
            {title.length > 25 ? title.slice(0, 25) : title}
          </h3>
          <span class="card__by">
            {details.length > 100 ? details.slice(0, 100) + '...' : details}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default CourseContainer;