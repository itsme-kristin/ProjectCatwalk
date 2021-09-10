import React from 'react';
import { Grid } from '@material-ui/core';

const ReviewTile = ({ review }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        Rating
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              Summary
            </Grid>
            <Grid item xs>
              Body
            </Grid>
            <Grid item xs>
              Recommend
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      <Grid item xs={3}>Username, Date</Grid>
    </Grid>
  );
};

export default ReviewTile;