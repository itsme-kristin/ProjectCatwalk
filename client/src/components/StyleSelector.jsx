import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minHeight: "200px",
    border: "dotted 1px grey",
    marginBottom: "20px"
  },
});

const StyleSelector = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root} justifyContent="center">
      {

      }
      <Grid item xs={3}>

      </Grid>
      {/* <Typography variant="overline">
        Styles Select Component
      </Typography> */}
    </Grid>
  )
}


export default StyleSelector