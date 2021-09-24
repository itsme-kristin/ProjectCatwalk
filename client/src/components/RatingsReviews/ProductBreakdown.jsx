import React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CharSliders = withStyles({
  thumb: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid black',
    borderRadius: 0
  },
  track: {
    height: 8,
    backgroundColor: 'transparent'
  },
  rail: {
    height: 8,
    opacity: 0.5
  },
  mark: {
    height: 8,
    width: 5,
    marginTop: 0,
    backgroundColor: 'white'
  }
})(Slider);

const ProductBreakdown = ({ productMeta }) => {
  if (productMeta) {
    const charScales = Object.entries(productMeta.characteristics).map(
      (char, index) => {
        let labels = [];

        if (char[0] === 'Fit') {
          labels = [
            'Runs tight',
            'Runs long'
          ];
        } else if (char[0] === 'Length') {
          labels = [
            'Runs short',
            'Runs long'
          ];
        } else if (char[0] === 'Quality') {
          labels = [
            'Poor',
            'Perfect'
          ];
        } else if (char[0] === 'Comfort') {
          labels = [
            'Uncomfortable',
            'Perfect'
          ];
        } else if (char[0] === 'Width') {
          labels = [
            'Too narrow',
            'Too wide'
          ];
        } else if (char[0] === 'Size') {
          labels = [
            'A size too small',
            'A size too big'
          ];
        }
        const marks = [
          {
            value: 7 / 3,
            label: ''
          },
          {
            value: 11 / 3,
            label: ''
          }
        ];
        return (
          <Grid
            key={index}
            style={{ marginLeft: '20px' }}
            item
            xs={12}
            container
            direction='column'
          >
            <Grid item xs={2}>
              <Typography variant='subtitle2'>{char[0]}</Typography>
            </Grid>
            <Grid item xs={10}>
              <CharSliders
                value={Number(char[1].value)}
                marks={marks}
                min={1}
                max={5}
                disabled
              />
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={6}>
                <Typography variant='caption'>{labels[0]}</Typography>
              </Grid>
              <Grid
                style={{ textAlign: 'right', paddingRight: '47px' }}
                item
                xs={6}
              >
                <Typography variant='caption'>{labels[1]}</Typography>
              </Grid>
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
