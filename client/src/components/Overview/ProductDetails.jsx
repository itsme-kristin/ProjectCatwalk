import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StyleSelector from './StyleSelector.jsx';
import SocialMediaShare from './SocialMediaShare.jsx';
import AverageRating from '../AverageRating.jsx';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    padding: "20px"
  },

  category: {
    fontWeight: "700"
  },

  reviewsLink: {
    marginLeft: "10px",
    textDecoration: "underline"
  },

  price: {
    minHeight: "63px"
  },

  salePrice: {
    color: "red"
  },

  lineThrough: {
    textDecoration: "line-through",
  },

  rating: {
    marginBottom: "20px"
  }
})

const ProductDetails = ({currentProduct, productStyles, styleIndex, changeStyle}) => {
  const classes = useStyles();
  const [ratingsInfo, setRatingsInfo] = useState({
    avgProductRating: 0,
    totalRatings: 0
  })


  const displayPrice = () => {
    if (productStyles[styleIndex]["sale_price"]) {
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography className={classes.salePrice} variant="h6">
              {productStyles[styleIndex]["sale_price"]}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline" gutterBottom>
            Original Price: <span className={classes.lineThrough}>{productStyles[styleIndex]["original_price"]}</span>
            </Typography>
          </Grid>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {productStyles[styleIndex]["original_price"]}
          </Typography>
        </React.Fragment>
      )
    }
  }

  return (
    <Grid container className={classes.root} direction="column" alignItems="stretch">
      <Grid container alignItems="center" className={classes.rating}>
        <AverageRating
          productId={currentProduct.id}
          avgProductRating={ratingsInfo.avgProductRating}
          setRatingsInfo={setRatingsInfo}
        />
        <Typography variant="caption" className={classes.reviewsLink}>
           Read all {ratingsInfo.totalRatings} reviews
        </Typography>
      </Grid>
      <Typography variant="h6">
        {currentProduct.category}
      </Typography>
      <Typography className={classes.category} variant="h3" gutterBottom>
        {currentProduct.name}
      </Typography>
      <Grid container className={classes.price}>
        {displayPrice()}
      </Grid>
       <StyleSelector productStyles={productStyles} styleIndex={styleIndex} changeStyle={changeStyle} />
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField variant="outlined" defaultValue="Select Size" fullWidth></TextField>
        </Grid>
        <Grid item xs={4}>
          <Select variant="outlined" fullWidth>
            <MenuItem>1</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={8}>
          <Button variant="contained" color="primary" fullWidth>Add to Cart</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <SocialMediaShare
            currentProduct={currentProduct}
            photoUrl={productStyles[styleIndex]["photos"][0]["thumbnail_url"]}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetails;