import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import OutfitCard from './OutfitCard.jsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
    width: 200,
    height: 330,
    border: "solid 3px black"
  },
  title: {
    fontSize: 35,
  },
  }));

const AddOutfitButton = (props) => {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined" onClick={() => props.handleAddOutfitClick()}>
        <CardContent >
          <Grid container direction="column">
            <Grid container direction="row" item>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={10} align="center">
                <Typography className={classes.title} gutterBottom>
                Add To Your Outfit!
                </Typography>
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
            <Grid container direction="row" item>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={4}>
                  <Icon style={{ fontSize: 100}}>add_circle</Icon>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default AddOutfitButton;