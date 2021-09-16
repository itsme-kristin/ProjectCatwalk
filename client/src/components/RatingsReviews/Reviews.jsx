import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import SortingDropdown from './SortingDropdown.jsx';
import NewReview from './NewReview.jsx';

const Reviews = ({ currentProduct }) => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filters, setFilters] = useState([]);
  const [reviewData, setReviewData] = useState(null);
  const [selected, setSelected] = useState('relevant');

  useEffect(() => {
    axios
      .get(`/api/reviews/meta?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviewData(data);
        const totalReviews = Object.values(data.ratings).reduce((sum, val) => sum + Number(val), 0)
        axios
          .get(`/api/reviews?product_id=${currentProduct.id}&count=${totalReviews}&sort=${selected}`)
          .then(({ data }) => {
            setReviews(data.results);
            setFilteredReviews(data.results);
          })
          .catch(() => {
            console.log('error getting reviews');
          });
      })
      .catch(() => {
        console.log('error getting review metadata');
      });
  }, [selected]);

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
      const updatedFilters = [...filters];
      updatedFilters.splice(ratingIndex, 1);
      setFilters(updatedFilters);
    } else {
      setFilters([...filters, rating]);
    }
  };

  const removeFiltersButton =
    filters.length > 0 ? (
      <Button variant='outlined' onClick={() => setFilters([])}>
        Remove Filters
      </Button>
    ) : null;

  return (
    <div>
      Ratings & Reviews
      <NewReview />
      <Grid container spacing={2}>
        <Grid item xs={3} container spacing={1}>
          <Grid item xs={12}>
            <RatingsBreakdown
              currentProduct={currentProduct}
              reviewData={reviewData}
              filterReviews={filterReviews}
            />
          </Grid>
          <Grid item xs={12}>
            {removeFiltersButton}
          </Grid>
          <Grid item xs={12}>
            <ProductBreakdown reviewData={reviewData} />
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <SortingDropdown selected={selected} setSelected={setSelected} />
          <ReviewList
            reviews={filteredReviews}
            currentProduct={currentProduct}
            selected={selected}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
