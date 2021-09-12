import React from 'react';
import { Grid, Divider} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%'
  },
  user: {
    'text-align': 'right'
  }
}));

const ReviewTile = ({ review }) => {

  const classes = useStyles();
  const recommend = review.recommend ? 'I recommend this product' : 'I do not recommend this product';

  return (
    <Grid className={classes.root} container spacing={3} direction="column">
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item xs={6}>
          <Rating name="read-only" value={review.rating} precision={0.25} readOnly />
        </Grid>
        <Grid className={classes.user} item xs={6}>{review.reviewer_name}, {review.date}</Grid>
      </Grid>
      <Grid item xs={12}>
        {review.summary}
      </Grid>
      <Grid item xs={12}>
        {review.body}
      </Grid>
      <Grid item xs={12}>
        {recommend}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ReviewTile;