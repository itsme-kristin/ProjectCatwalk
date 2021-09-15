import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

const Reviews = ({ currentProduct }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/reviews?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviews(data.results);
        axios
          .get(`/api/reviews/meta?product_id=${currentProduct.id}`)
          .then(({ data }) => {
            setReviewData(data);
          })
          .catch(() => {
            console.log('error getting review metadata');
          });
      })
      .catch(() => {
        console.log('error getting reviews');
      });
  }, []);

  const filterReviews = rating => {
    const filteredReviews = [...reviews].filter(
      review => review.rating === rating
    );
    setReviews(filteredReviews);
  };

  return (
    <div>
      Ratings & Reviews
      <Grid container spacing={2}>
        <Grid item xs={3} container>
          <Grid item xs={12}>
            <RatingsBreakdown
              currentProduct={currentProduct}
              reviewData={reviewData}
              filterReviews={filterReviews}
            />
          </Grid>
          <Grid item xs={12}>
            <ProductBreakdown reviewData={reviewData} />
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <ReviewList
            reviews={reviews}
            currentProduct={currentProduct}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
