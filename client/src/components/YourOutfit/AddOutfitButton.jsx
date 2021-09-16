import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import OutfitCard from './OutfitCard.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
    maxWidth: 230,
    maxHeight: 350,
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  }
}));

//add to card:
//onClick={() => props.handleAddOutfitClick()}
const AddOutfitButton = (props) => {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined" onClick={() => props.handleAddOutfitClick()}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Add to Your Outfit
          </Typography>
          <div className={classes.root}>
            <Icon style={{ fontSize: 50}}>add_circle</Icon>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default AddOutfitButton;