import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    border: 'solid 1px black',
    marginBottom: "20px",
  },

  selector: {
    position: "relative",
    width: "50px",
    height: "50px",
    borderRadius: "25px"
  }
});

const StyleSelector = ({ styles, styleIndex, setStyleIndex }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="overline">
          Style > {styles[styleIndex]["name"]}
        </Typography>
      </Grid>
      { styles.map((productStyle, index) => {
        var styleBG = {
          backgroundImage: `url(${productStyle["photos"][0]["thumbnail_url"]})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px',
          backgroundPosition: 'center',
        }

        var check = {
          position: "absolute",
          top: "-5px",
          left: "35px",
          color: '#3f51b5'
        }

        if (index === styleIndex) {
          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper className={classes.selector} elevation={3} style={styleBG}>
                <i className="material-icons" style={check}>check_circle</i>
              </Paper>
            </Grid>
          )
        } else {
          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                className={classes.selector}
                elevation={3}
                style={styleBG}
                onClick={() => {
                  setStyleIndex(index);
                }}/>
            </Grid>
          )
        }
      })}
    </Grid>
  )
}


export default StyleSelector