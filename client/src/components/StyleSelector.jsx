import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginBottom: "20px"
  },

  selector: {
    position: "relative",
    width: "50px",
    height: "50px",
    borderRadius: "25px"
  }
});

const StyleSelector = ({ productStyles, styleIndex, changeStyle }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="overline">
          Style > {productStyles[styleIndex]["name"]}
        </Typography>
      </Grid>
      {productStyles.map((productStyle, index) => {
        var styleBG = {
          background: `url(${productStyle["photos"][0]["thumbnail_url"]})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px',
          backgroundPosition: 'center',
        }

        var check = {
          position: "absolute",
          top: "-5px",
          left: "35px"
        }

        if (index === styleIndex) {
          return (
            <Grid item xs={3} key={index}>
              <Paper className={classes.selector} elevation={3} style={styleBG}>
                <i className="material-icons" style={check}>check_circle</i>
              </Paper>
            </Grid>
          )
        } else {
          return (
            <Grid item xs={3} key={index}>
              <Paper
                className={classes.selector}
                elevation={3}
                style={styleBG}
                onClick={() => {
                  changeStyle(index)
                }}/>
            </Grid>
          )
        }
      })}
    </Grid>
  )
}


export default StyleSelector