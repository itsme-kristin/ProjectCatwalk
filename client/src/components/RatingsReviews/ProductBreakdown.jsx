import React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';

const ProductBreakdown = ({ reviewData }) => {
  if (reviewData) {
    // const { Comfort, Fit, Length, Quality } = reviewData.characteristics;
    // console.log(reviewData.characteristics)
    // console.log(Object.entries(reviewData.characteristics))
    const charScales = Object.entries(reviewData.characteristics).map((char, index) => {
      return (
        <Grid key={index} item xs={12}>
          <Typography>{char[0]}</Typography>
          <Slider
            value={Number(char[1].value)}
            marks
            min={1}
            max={5}
            disabled
          />
        </Grid>
      )
    })

    return (
      <Grid container spacing={1} direction='column'>
        {charScales}
      </Grid>
    );
  } else {
    return null;
  }
};

export default ProductBreakdown;
