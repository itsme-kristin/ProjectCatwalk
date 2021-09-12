import React from 'react';
import ReviewTile from './ReviewTile.jsx';

// Will eventually map through reviews from API and render a review tile for each
const ReviewList = () => {
  return (
    <div>
      <ReviewTile />
      <ReviewTile />
    </div>
  );
};

export default ReviewList;