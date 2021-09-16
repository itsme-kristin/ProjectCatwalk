import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({
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
    width: '60px',
    height: '60px'
  },

  thumb: {
    width: '50px',
    height: '50px'
  }
})

const ImageGallery = ({ photos }) => {
  const classes = useStyles();
  const [thumbs, setThumbs] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  const grabSevenThumbs = () => {
    let newThumbs = photos.slice(0, 7);

    return (
      newThumbs.map(({ thumbnail_url }, index) => {
        let styleBG = {
          backgroundImage: `url(${thumbnail_url})`,
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
          <Grid item xs={12} key={index}>
            <Paper className={classes.thumb} style={styleBG} onClick={() => setImgIndex(index)}/>
          </Grid>
        )
      })
    )
  }

  const displayImage = () => {
    console.log('photo:', photos[imgIndex], 'index:', imgIndex)
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
    <Grid container spacing={1}>
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

    // <div style={styles}>
    //   <div style={styles2}>
    //     <div style={styles3}>
    //       <div style={styles4}>P</div>
    //       <div style={styles4}>P</div>
    //       <div style={styles4}>P</div>
    //       <div style={styles4}>P</div>
    //     </div>
    //     <div style={styles5}>
    //       <h1>Image Gallery</h1>
    //     </div>
    //   </div>
    // </div>