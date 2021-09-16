import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({
  gallery: {
    width: '650px',
    height: '510px'
  },

  media: {
    width: '500px',
    height: '500px',
    backgroundSize: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    cursor: 'zoom-in'
  },

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

const ImageGallery = ({ photos }) => {
  const classes = useStyles();
  const [selectedThumb, setSelectedThumb] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  const grabSevenThumbs = () => {
    let start = 0;
    let end = 7;

    if (imgIndex > 3 && photos.length > 7) {
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
          console.log('I\'m Selected!:', index, '\n', image)
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

  const displayImage = () => {
    var image = {
      backgroundImage: `url(${photos[imgIndex].url})`
    }
    return (
      <Grid item>
        <Paper className={classes.media} style={image} elevation={3}/>
      </Grid>
    )
  }

  return (
    <Grid container spacing={1} className={classes.gallery}>
      <Grid item xs={1}>
        <Grid container spacing={2} direction="column" justifyContent="center">
          {grabSevenThumbs()}
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Grid container justifyContent="center">
          {displayImage()}
        </Grid>
      </Grid>
    </Grid>
  )
}


export default ImageGallery;