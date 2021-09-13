import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetails from './ProductDetails.jsx'
import ImageGallery from './ImageGallery.jsx'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // border: "dotted 1px grey", //component outline
  },

  prodOverview: {
    padding: "20px",
  }
});


const Overview = ({ currentProduct }) => {
  const classes = useStyles();
  const [productStyles, setProductStyles] = useState([]);
  const [styleIndex, setStyleIndex] = useState(0);

  let productId = currentProduct.id

  useEffect(() => {
    axios.get(`/api/products/${productId}/styles`)
    .then(({ data }) => {
      setProductStyles(data.results)
    }).catch((err) => {
      console.log('Unable to retireve product overview details')
    });
  }, [productId])


  if (productStyles.length === 0) {
    return <CircularProgress />
  }

  const showDetails = () => {
    let slogan = currentProduct.slogan;
    let desc = currentProduct.description
    if (!!slogan || !!desc) {
      return (
        <Grid item xs={12} className={classes.prodOverview}>
          <Typography variant="h5" gutterBottom>
            {currentProduct.slogan}
          </Typography>
          <Typography variant="body1">
            {currentProduct.description}
          </Typography>
        </Grid>
      )
    } else {
      return null
    }
  };

  // console.log('index:', styleIndex, 'style:', productStyles[styleIndex]);

  return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={7}>
          <ImageGallery selectedStyle={productStyles[styleIndex].photos}/>
        </Grid>
        <Grid item xs={5}>
          <ProductDetails
            currentProduct={currentProduct}
            productStyles={productStyles}
            styleIndex={styleIndex}
            changeStyle={setStyleIndex}
          />
        </Grid>
        {showDetails()}
      </Grid>
  )
}

export default Overview;