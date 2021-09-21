import React, { useState } from 'react';
import moment from 'moment';
import { Grid, Divider, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import FeedbackButton from './FeedbackButton.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: '75%'
  },
  user: {
    'text-align': 'right'
  },
  response: {
    'background-color': 'grey'
  },
  feedback: {
    padding: '9px 0px'
  },
  summary: {
    'font-weight': 'bold'
  }
});

const ReviewTile = ({ review }) => {
  const classes = useStyles();
  const recommend = review.recommend ? 'I recommend this product' : null;
  const date = review.date.substring(0, 10);
  const formattedDate = moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  const response = review.response ? (
    <Grid
      className={classes.response}
      item
      xs={12}
      container
      direction='column'
    >
      <Grid item xs={12}>
        <Typography>Response from seller:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{review.response}</Typography>
      </Grid>
    </Grid>
  ) : null;

  return (
    <Grid className={classes.root} container spacing={3} direction='column'>
      <Grid item xs={12} container justifyContent='space-between'>
        <Grid item xs={6}>
          <Rating
            name='read-only'
            value={review.rating}
            precision={0.25}
            readOnly
          />
        </Grid>
        <Grid className={classes.user} item xs={6}>
          <Typography>
            {review.reviewer_name}, {formattedDate}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.summary}>{review.summary}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{review.body}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{recommend}</Typography>
      </Grid>
      {response}
      <Grid item xs={12} container>
        <Grid className={classes.feedback} item xs={4}>
          <Typography>Was this helpful?</Typography>
        </Grid>
        <FeedbackButton
          helpfulness={review.helpfulness}
          id={review.review_id}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ReviewTile;
