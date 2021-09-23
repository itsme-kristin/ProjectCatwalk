import React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';

const ProductBreakdown = ({ productMeta }) => {
  if (productMeta) {
    const charScales = Object.entries(productMeta.characteristics).map(
      (char, index) => {
        return (
          <Grid key={index} style={{ marginLeft: '20px' }} item xs={12} container direction='column'>
            <Grid item xs={2}>
              <Typography variant='caption'>{char[0]}</Typography>
            </Grid>
            <Grid item xs={10}>
              <Slider
                value={Number(char[1].value)}
                marks
                min={1}
                max={5}
                disabled
              />
            </Grid>
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
