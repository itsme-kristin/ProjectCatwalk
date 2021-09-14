import React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';

const ProductBreakdown = ({ reviewData }) => {
  if (reviewData) {
    const { Comfort, Fit, Length, Quality } = reviewData.characteristics

    return (
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Typography>
            Comfort
          </Typography>
          <Slider
            value={Number(Comfort.value)}
            marks
            min={1}
            max={5}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Fit
          </Typography>
          <Slider
            value={Number(Fit.value)}
            marks
            min={1}
            max={5}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Length
          </Typography>
          <Slider
            value={Number(Length.value)}
            marks
            min={1}
            max={5}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Quality
          </Typography>
          <Slider
            value={Number(Quality.value)}
            marks
            min={1}
            max={5}
            disabled
          />
        </Grid>
      </Grid>
    )
  } else {
    return null;
  }
};

export default ProductBreakdown;