import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Modal } from '@material-ui/core';

const useStyles = makeStyles({
  selected: {
    border: 'solid 4px #3f51b5',
    width: '50px',
    height: '50px'
  },

  thumb: {
    margin: '4px',
    width: '50px',
    height: '50px'
  }
})

const Thumbs = ({ photos, imgIndex, setImgIndex }) => {
  const classes = useStyles();

  const grabSevenThumbs = () => {
    let start = 0;
    let end = 7;

    if (photos.length > 7 && imgIndex > 3) {
      if (imgIndex + 4 >= photos.length) {
        start = photos.length - 7
        end = photos.length
      } else {
        start = imgIndex - 3;
        end = imgIndex + 4;
      }
    }

    return (
      photos.map((image, index) => {
        let styleBG = {
          backgroundImage: `url(${image.thumbnail_url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px',
          backgroundPosition: 'center'
        }
        if (index === imgIndex) {
          return (
            <Grid item xs={12} key={index}>
              <Paper className={classes.selected} style={styleBG}/>
            </Grid>
          )
        }
        return (
          <Grid item xs={12} key={index} >
            <Paper className={classes.thumb} style={styleBG} onClick={() => setImgIndex(index)}/>
          </Grid>
        )
      }).slice(start, end)
    )
  }

  return grabSevenThumbs();

}

export default Thumbs;