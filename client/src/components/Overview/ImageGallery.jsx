import React, { useState, useEffect } from 'react';

import ExpandedView from './ExpandedView.jsx'
import Thumbs from './Thumbs.jsx'

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

  noMedia: {
    width: '500px',
    height: '500px',
    backgroundColor: 'grey',
  },

  message: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px'
  }
})

const ImageGallery = ({ photos }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const classes = useStyles();

  const displayImage = () => {
    let showLeft = imgIndex !== 0 ? true : false;
    let showRight = imgIndex !== photos.length - 1 ? true : false;
    let iconSize = 32;
    let iconColor = '#3f51b5';
    let iconOpacity = 0.6;

    if (imgIndex > photos.length - 1) {
      setImgIndex(photos.length - 1)
      return null
    }

    if (photos[imgIndex].url === null) {
      return (
        <Grid container justifyContent="center" alignItems="center" className={classes.noMedia}>
          <Paper>
            <Typography variant="h6" className={classes.message}>
              Sorry, no image is currently available...
            </Typography>
          </Paper>
        </Grid>
      )
    }

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
          <Thumbs photos={photos} imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Grid container justifyContent="center">
          {displayImage()}
        </Grid>
      </Grid>
      <Modal open={viewOpen} onClose={closeExpandedView}>
        <ExpandedView photos={photos} imgIndex={imgIndex} setImgIndex={setImgIndex} close={closeExpandedView}ref/>
      </Modal>
    </Grid>
  )
}


export default ImageGallery;