import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles({
  viewModal: {
    position: 'absolute',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '10px'
  },
});

const ExpandedView = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.viewModal}>
      <Typography>
        Hey There!
      </Typography>
    </Grid>
  )
});

export default ExpandedView