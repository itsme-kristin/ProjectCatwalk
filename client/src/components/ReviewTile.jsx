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

  return (
    <Grid className={classes.root} container spacing={3} direction="column">
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item xs={6}>
          <Rating name="quarter-rating-read" precision={0.25} readOnly />
        </Grid>
        <Grid className={classes.user} item xs={6}>Username, Date</Grid>
      </Grid>
      <Grid item xs={2}>
        Summary
      </Grid>
      <Grid item xs={2}>
        Body
      </Grid>
      <Grid item xs={2}>
        Recommend
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ReviewTile;