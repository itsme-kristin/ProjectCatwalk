import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import ReviewTile from './ReviewTile.jsx';

// Will eventually map through reviews from API and render a review tile for each
const ReviewList = ({ reviews, currentProduct, selected }) => {
  const [numOfReviews, setNumOfReviews] = useState(2);

  const sortReviews = (reviews) => {
    if (selected === 'Most Recent') {
      return reviews.sort((a, b) => b.review_id - a.review_id);
    } else if (selected === 'Most Helpful') {
      return reviews.sort((a, b) => b.helpfulness - a.helpfulness);
    }
  }

  const renderedReviews = sortReviews(reviews)
    .slice(0, numOfReviews)
    .map((review, index) => {
      return <ReviewTile key={index} review={review} />;
    });

  const showButton =
    renderedReviews.length < reviews.length ? (
      <Button
        variant='outlined'
        onClick={() => setNumOfReviews(numOfReviews + 2)}
      >
        More Reviews
      </Button>
    ) : null;

  return (
    <div>
      {renderedReviews}
      <br />
      {showButton}
    </div>
  );
};

export default ReviewList;
