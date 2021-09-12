import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

// Will eventually map through reviews from API and render a review tile for each
const ReviewList = ({ currentProduct }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`/api/reviews?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviews(data.results);
      });

  }, [])

  const renderedReviews = reviews.map(review => {
    return <ReviewTile key={review.review_id} review={review} />
  })

  return (
    <div>
      {renderedReviews}
    </div>
  );
};

export default ReviewList;