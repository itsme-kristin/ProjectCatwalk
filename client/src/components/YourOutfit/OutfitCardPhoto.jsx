import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: '70.25%',
  }
}));

const OutfitCardPhoto = (props) => {
  const [outfitCardPhoto, setOutfitCardPhoto] = useState(null);
  const classes = useStyles();

  return (
    <div>I am an outfit photo!</div>
  )
}

export default OutfitCardPhoto;