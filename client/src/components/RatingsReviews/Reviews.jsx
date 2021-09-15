import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const Reviews = ({ currentProduct }) => {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/reviews/meta?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviewData(data);
      })
      .catch(() => {
        console.log('error getting review metadata');
      });
  }, []);

  return (
    <div>
      Ratings & Reviews
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductBreakdown reviewData={reviewData} />
        </Grid>
        <Grid item xs={9}>
          <ReviewList currentProduct={currentProduct} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
