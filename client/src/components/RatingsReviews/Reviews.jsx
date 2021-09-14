import React from 'react';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ currentProduct }) => {

  return (
    <div>
      Ratings & Reviews
      <ReviewList currentProduct={currentProduct} />
    </div>
  )
}

export default Reviews;