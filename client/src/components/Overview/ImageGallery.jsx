import React, { useState, useEffect } from 'react';

import ExpandedView from './ExpandedView.jsx'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Modal } from '@material-ui/core';

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

const ImageGallery = ({ photos, imgIndex, setImgIndex }) => {
  const [viewOpen, setViewOpen] = useState(false);
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

  const displayImage = () => {
    let showLeft = imgIndex !== 0 ? true : false;
    let showRight = imgIndex !== photos.length - 1 ? true : false;
    let iconSize = 32;
    let iconColor = '#3f51b5';
    let iconOpacity = 0.6;

    var inline = {
      view: {
        position: 'relative'
      },

      media: {
        backgroundImage: `url(${photos[imgIndex].url})`
      },

      rightButton: {
        position: 'absolute',
        top: '50%',
        right: '-20px',
        visibility: showRight ? 'visible' : 'hidden',
        fontSize: iconSize,
        color: iconColor,
        opacity: iconOpacity,
        userSelect: 'none',
        cursor: 'pointer'
      },

      leftButton: {
        position: 'absolute',
        top: '50%',
        left: '-20px',
        visibility: showLeft ? 'visible' : 'hidden',
        fontSize: iconSize,
        color: iconColor,
        opacity: iconOpacity,
        userSelect: 'none',
        cursor: 'pointer'
      }
    }

    return (
      <Grid item style={inline.view}>
        <Paper className={classes.media}
          style={inline.media} elevation={3}
          onClick={openExpandedView}>
        </Paper>
          <i className="material-icons"
            style={inline.leftButton}
            onClick={() => setImgIndex(imgIndex - 1)}>arrow_circle_left</i>
          <i className="material-icons"
            style={inline.rightButton}
            onClick={() => setImgIndex(imgIndex + 1)}>arrow_circle_right</i>
      </Grid>
    )
  }

  const openExpandedView = () => {
    setViewOpen(true);
  }

  const closeExpandedView = () => {
    setViewOpen(false);
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
      <Modal open={viewOpen} onClose={closeExpandedView}>
        <ExpandedView photos={photos} imgIndex={imgIndex} setImgIndex={setImgIndex} ref/>
      </Modal>
    </Grid>
  )
}


export default ImageGallery;