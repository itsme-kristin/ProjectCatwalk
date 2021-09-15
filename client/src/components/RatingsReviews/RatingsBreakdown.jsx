import React, { useState } from 'react';
import { Typography, Grid, Slider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AverageRating from '../AverageRating.jsx';

const useStyles = makeStyles({
  caption: {
    padding: '3px 0px'
  }
});

const RatingsBreakdown = ({ currentProduct, reviewData }) => {
  const [ratingsInfo, setRatingsInfo] = useState({
    avgProductRating: 0,
    totalRatings: 0
  });
  const classes = useStyles();

  const handleClick = e => {
    e.preventDefault();
  };

  if (reviewData) {
    return (
      <Grid container direction='column'>
        <Grid item xs={12} container>
          <Grid item xs={3}>
            <Typography variant='h3'>
              {Math.round(ratingsInfo.avgProductRating * 4) / 4}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <AverageRating
              productId={currentProduct.id}
              avgProductRating={ratingsInfo.avgProductRating}
              setRatingsInfo={setRatingsInfo}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid className={classes.caption} item xs={2}>
            <Typography variant='caption'>
              <Link
                component='button'
                underline='always'
                color='inherit'
                onClick={handleClick}
              >
                5 Stars
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={Number(reviewData.ratings['5'])}
              min={1}
              max={ratingsInfo.totalRatings}
              disabled
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid className={classes.caption} item xs={2}>
            <Typography variant='caption'>
              <Link
                component='button'
                underline='always'
                color='inherit'
                onClick={handleClick}
              >
                4 Stars
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={Number(reviewData.ratings['4'])}
              min={1}
              max={ratingsInfo.totalRatings}
              disabled
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid className={classes.caption} item xs={2}>
            <Typography variant='caption'>
              <Link
                component='button'
                underline='always'
                color='inherit'
                onClick={handleClick}
              >
                3 Stars
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={Number(reviewData.ratings['3'])}
              min={1}
              max={ratingsInfo.totalRatings}
              disabled
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid className={classes.caption} item xs={2}>
            <Typography variant='caption'>
              <Link
                component='button'
                underline='always'
                color='inherit'
                onClick={handleClick}
              >
                2 Stars
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={Number(reviewData.ratings['2'])}
              min={1}
              max={ratingsInfo.totalRatings}
              disabled
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid className={classes.caption} item xs={2}>
            <Typography variant='caption'>
              <Link
                component='button'
                underline='always'
                color='inherit'
                onClick={handleClick}
              >
                1 Star
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={Number(reviewData.ratings['1'])}
              min={1}
              max={ratingsInfo.totalRatings}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

export default RatingsBreakdown;
