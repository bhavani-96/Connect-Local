//review.jsx
import React from 'react';
import './Review.css';

const reviews = [
  {
    id: 1,
    user: 'Narayana',
    rating: 5,
    text: 'This app is amazing! It made finding a service provider so easy and quick.',
  },
  {
    id: 2,
    user: 'Saroja',
    rating: 3,
    text: 'It is helpful.',
  },
  {
    id: 3,
    user: 'Geetha',
    rating: 4,
    text: 'Wonderful job! The app is intuitive and the services are top-notch.',
  },
  {
    id: 4,
    user: 'Venkat',
    rating: 5,
    text: 'Excellent service! The app is user-friendly and efficient.',
  },
  {
    id: 5,
    user: 'Lakshmi',
    rating: 4,
    text: 'Great app! It has made my life so much easier.',
  },
];

const Review = ({ user, rating, text }) => (
  <div className="review">
    <div className="review-header">
      <h3>{user}</h3>
      <div className="rating">{'⭐'.repeat(rating)}</div>
    </div>
    <p>{text}</p>
  </div>
);

const Reviews = () => (
  <div className="reviews-page">
    <h1>User Reviews</h1>
    <div className="reviews-list">
      {reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  </div>
);

export default Reviews;