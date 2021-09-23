import React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';

const ProductBreakdown = ({ productMeta }) => {
  if (productMeta) {
    const charScales = Object.entries(productMeta.characteristics).map(
      (char, index) => {
        return (
          <Grid key={index} item xs={9}>
            <Typography variant='caption'>{char[0]}</Typography>
            <Slider
              value={Number(char[1].value)}
              marks
              min={1}
              max={5}
              disabled
            />
          </Grid>
        );
      }
    );

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
