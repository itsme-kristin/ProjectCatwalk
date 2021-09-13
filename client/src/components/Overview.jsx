import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetails from './ProductDetails.jsx'
import ImageGallery from './ImageGallery.jsx'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
  prodOverview: {
    padding: "20px",
  },

  featureList: {
    padding: "20px",
    borderLeft: "solid 3px black"
  }
});


const Overview = ({ productId }) => {
  const classes = useStyles();
  const [productDetails, setProductDetails] = useState({
    productInfo: {},
    productStyles: [],
  })
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    let currentProductDetails = {};
    axios.get(`/api/products/${productId}`)
    .then(({ data }) => {
      currentProductDetails["productInfo"] = data;
      console.log('info', currentProductDetails["productInfo"])
      return axios.get(`/api/products/${productId}/styles`);
    }).then(({ data }) => {
      currentProductDetails["productStyles"] = data.results;
      console.log('style', currentProductDetails["productStyles"])
      setProductDetails(currentProductDetails);
    }).catch((err) => {
      console.log('Unable to retireve product details', err)
    });
  }, [productId])


  if (productDetails.productStyles.length === 0) {
    return <CircularProgress />
  }

  const showDetails = () => {
    let slogan = productDetails.productInfo.slogan;
    let description = productDetails.productInfo.description
    let features = productDetails.productInfo.features
    if (!!slogan || !!description || features.length !== 0) {
      return (
        <Grid container>
          <Grid item xs={7} className={classes.prodOverview}>
            <Typography variant="h5" gutterBottom>
              {slogan}
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={5} className={classes.featureList}>
            <List component="nav">
              {features.map(({ feature, value }, featureIndex) => {
                return (
                  <ListItem key={featureIndex}>
                    <ListItemIcon>
                      <i className="material-icons">done</i>
                    </ListItemIcon>
                    <ListItemText primary={`The ${feature} are ${value}`}/>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      )
    } else {
      return null
    }
  };

  // console.log('index:', styleIndex, 'style:', productStyles[styleIndex]);

  return (
      <Grid
        container
        alignItems="flex-start"
      >
        <Grid item xs={7}>
          <ImageGallery selectedStyle={productDetails.productStyles[styleIndex].photos}/>
        </Grid>
        <Grid item xs={5}>
          <ProductDetails
            currentProduct={productDetails.productInfo}
            productStyles={productDetails.productStyles}
            styleIndex={styleIndex}
            changeStyle={setStyleIndex}
          />
        </Grid>
        {showDetails()}
      </Grid>
  )
}

export default Overview;