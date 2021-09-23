import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import SortingDropdown from './SortingDropdown.jsx';
import NewReview from './NewReview.jsx';

const Reviews = ({ handleClick, currentProduct, productMeta }) => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selected, setSelected] = useState('relevant');

  const useStyles = makeStyles({
    section: {
      minHeight: '33vh'
    },
    title: {
      fontSize: '20px',
      padding: '10px',
      margin: '10px'
    },
    sliders: {
      margin: 'auto'
    },
    message: {
      paddingLeft: '20px',
      marginBottom: '10px'
    }
  });

  const classes = useStyles();

  useEffect(() => {
    const totalReviews = Object.values(productMeta.ratings).reduce(
      (sum, val) => sum + Number(val),
      0
    );
    axios
      .get(
        `/api/reviews?product_id=${currentProduct.id}&count=${totalReviews}&sort=${selected}`
      )
      .then(({ data }) => {
        setReviews(data.results);
        setFilteredReviews(data.results);
      })
      .catch(() => {
        console.log('error getting reviews');
      });
  }, [productMeta, selected]);

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
      <Grid item xs={12}>
        <Button
          variant='outlined'
          size='small'
          style={{ marginBottom: '10px', marginLeft: '15px' }}
          onClick={() => setFilters([])}
        >
          Remove Filters
        </Button>
      </Grid>
    ) : null;

  const filterMessage =
    filters.length > 0 ? (
      <Grid className={classes.message} item xs={12}>
        <Typography variant='body2'>
          Applied filter(s){': '}
          {filters.map((filter, index) => {
            if (index === filters.length - 1) {
              return `${filter}`;
            } else {
              return `${filter}, `;
            }
          })}
        </Typography>
      </Grid>
    ) : null;

  if (reviews.length === 0) {
    return (
      <div className={classes.section} onClick={e => handleClick(e, 'Reviews')}>
        <Typography
          className={classes.title}
          id='reviews'
          variant='h4'
          gutterBottom
        >
          RATINGS & REVIEWS
        </Typography>
        <Grid container justifyContent='center'>
          <NewReview
            productId={currentProduct.id}
            characteristics={productMeta.characteristics}
          />
        </Grid>
      </div>
    );
  } else if (reviews.length > 0 && filteredReviews.length === 0) {
    return (
      <div className={classes.section} onClick={e => handleClick(e, 'Reviews')}>
        <Typography
          className={classes.title}
          id='reviews'
          variant='h4'
          gutterBottom
        >
          RATINGS & REVIEWS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3} container spacing={1} justifyContent='center'>
            <Grid item xs={12}>
              <RatingsBreakdown
                productMeta={productMeta}
                filterReviews={filterReviews}
              />
              <br />
              {filterMessage}
              {removeFiltersButton}
              <Grid className={classes.productBreakdown} item xs={12}>
                <ProductBreakdown productMeta={productMeta} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={classes.section} onClick={e => handleClick(e, 'Reviews')}>
        <Typography
          className={classes.title}
          id='reviews'
          variant='h4'
          gutterBottom
        >
          RATINGS & REVIEWS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3} container spacing={1} justifyContent='center'>
            <Grid item xs={12}>
              <RatingsBreakdown
                productMeta={productMeta}
                filterReviews={filterReviews}
              />
              <br />
              {filterMessage}
              {removeFiltersButton}
              <Grid className={classes.productBreakdown} item xs={12}>
                <ProductBreakdown productMeta={productMeta} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} container justifyContent='center'>
            <Grid item xs={12}>
              <SortingDropdown selected={selected} setSelected={setSelected} />
            </Grid>
            <br />
            <Grid item xs={12}>
              <ReviewList
                reviews={filteredReviews}
                currentProduct={currentProduct}
                selected={selected}
                characteristics={productMeta.characteristics}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Reviews;
