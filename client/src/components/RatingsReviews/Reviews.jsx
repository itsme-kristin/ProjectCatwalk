import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

const Reviews = ({ currentProduct }) => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filters, setFilters] = useState([]);
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/reviews?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviews(data.results);
        setFilteredReviews(data.results);
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

  useEffect(() => {
    const reviewsToRender = [...reviews].filter(review => {
      if (filters.length > 0) {
        return filters.includes(review.rating);
      } else {
        return review;
      }
    });
    setFilteredReviews(reviewsToRender);
  }, [filters]);

  const filterReviews = rating => {
    const ratingIndex = filters.indexOf(rating);
    if (ratingIndex >= 0) {
      const updatedFilters = [...filters]
      updatedFilters.splice(ratingIndex, 1)
      setFilters(updatedFilters);
    } else {
      setFilters([...filters, rating]);
    }
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
          <ReviewList reviews={filteredReviews} currentProduct={currentProduct} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
