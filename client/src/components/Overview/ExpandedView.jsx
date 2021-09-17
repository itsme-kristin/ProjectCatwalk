import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles({
  viewModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  viewImage: {
    maxHeight: '800px',
    width: 'auto',
    height: 'auto',
    userSelect: 'none'
  }
});

const ExpandedView = React.forwardRef(({ photos, imgIndex, setImgIndex }, ref) => {
  const classes = useStyles();

  let showLeft = imgIndex !== 0 ? true : false;
  let showRight = imgIndex !== photos.length - 1 ? true : false;
  let iconSize = 32;
  let iconColor = 'white';
  let iconOpacity = 1;

  const inline = {
    leftButton: {
        visibility: showLeft ? 'visible' : 'hidden',
        fontSize: iconSize,
        color: iconColor,
        opacity: iconOpacity,
        userSelect: 'none',
        cursor: 'pointer'
    },

    rightButton: {
        visibility: showRight ? 'visible' : 'hidden',
        fontSize: iconSize,
        color: iconColor,
        opacity: iconOpacity,
        userSelect: 'none',
        cursor: 'pointer'
    },

    dot: {
      fontSize: iconSize,
      color: iconColor,
      opacity: iconOpacity,
      userSelect: 'none',
      cursor: 'pointer'
    }
  }
  return (
    <Grid container className={classes.viewModal} direction="column">
      <Grid item xs={12} >
        <Grid container justifyContent="center">
          <img className={classes.viewImage} src={photos[imgIndex].url}/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <i className="material-icons"
            style={inline.leftButton}
            onClick={() => setImgIndex(imgIndex - 1)}>arrow_circle_left</i>
          { photos.map((photo, index)=> {
            if (index === imgIndex) {
              return (
                <i className="material-icons"
                  style={inline.dot}>radio_button_checked</i>
              )
            } else {
              return (
                <i className="material-icons"
                  style={inline.dot}
                  onClick={() => setImgIndex(index)}>radio_button_unchecked</i>
              )
            }
          })}
          <i className="material-icons"
            style={inline.rightButton}
            onClick={() => setImgIndex(imgIndex + 1)}>arrow_circle_right</i>
        </Grid>
      </Grid>
    </Grid>
  )
});

export default ExpandedView