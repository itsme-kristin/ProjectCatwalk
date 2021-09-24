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
    opacity: 0.5,
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
      'None selected',
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ];
  } else if (char[0] === 'Length') {
    labels = [
      'None selected',
      'Runs short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ];
  } else if (char[0] === 'Quality') {
    labels = [
      'None selected',
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'
    ];
  } else if (char[0] === 'Comfort') {
    labels = [
      'None selected',
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ];
  } else if (char[0] === 'Width') {
    labels = [
      'None selected',
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'
    ];
  } else if (char[0] === 'Size') {
    labels = [
      'None selected',
      'A size too small',
      '1/2 a size too small',
      'Perfect',
      '1/2 a size too big',
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
                <Typography variant='caption'>{labels[1]}</Typography>
              </Grid>
              <Grid style={{textAlign: 'right', paddingRight: '47px'}} item xs={6}>
                <Typography variant='caption'>{labels[5]}</Typography>
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
