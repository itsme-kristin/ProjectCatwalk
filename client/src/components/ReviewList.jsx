import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import ReviewTile from './ReviewTile.jsx';

// Will eventually map through reviews from API and render a review tile for each
const ReviewList = ({ currentProduct }) => {
  const [reviews, setReviews] = useState([]);
  const [numOfReviews, setNumOfReviews] = useState(2);

  useEffect(() => {
    axios.get(`/api/reviews?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviews(data.results);
      });

  }, [])

  const renderedReviews = [...reviews].slice(0, numOfReviews).map((review, index) => {
    return <ReviewTile key={index} review={review} />
  });

  return (
    <div>
      {renderedReviews}
      <br/>
      <Button
        variant="outlined"
        onClick={() => {
          if (renderedReviews.length < reviews.length) {
            setNumOfReviews(numOfReviews + 2);
          }
        }}
      >
        More Reviews
      </Button>
    </div>
  );
};

export default ReviewList;