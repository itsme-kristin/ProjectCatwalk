import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import ReviewTile from './ReviewTile.jsx';
import NewReview from './NewReview.jsx';

const ReviewList = ({ reviews, currentProduct, selected, characteristics }) => {
  const [numOfReviews, setNumOfReviews] = useState(2);

  const renderedReviews = reviews
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
      <NewReview
        productId={currentProduct.id}
        characteristics={characteristics}
      />
    </div>
  );
};

export default ReviewList;
