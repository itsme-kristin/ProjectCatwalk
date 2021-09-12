import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
    maxHeight: 350,
  },
  media: {
    paddingTop: '53.25%',
  },
  content: {
    paddingTop: '10%',
  }
}));

const ProductCard = (props) => {
  const [productCardInfo, setProductCardInfo] = useState(null);
  const [productCardPhoto, setProductCardPhoto] = useState(null);
  const classes = useStyles();

  const getPhoto = () => {
    axios.get(`/api/products/${props.productId}/styles`)
      .then(stylesInfo => {
        setProductCardPhoto(stylesInfo.data.results[0]);
      })
      .catch(err => {
        console.info('There was an error getting product photo from the server.');
      });
  }

  const getProductInfo = () => {
    axios.get(`/api/products/${props.productId}`)
      .then(productInfo => {
        setProductCardInfo(productInfo.data);
      })
      .catch(err => {
        console.info('There was an error retrieving product information from the server.');
      });
  }

  useEffect(() => {
    getPhoto();
    getProductInfo();
  }, []);


  return productCardPhoto && productCardInfo && (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          component='div'
          className={classes.media}
          image={productCardPhoto.photos[0].thumbnail_url || ''}
          title={productCardInfo.name}
        />
        <CardContent>
          <div>{productCardInfo.category}</div>
          <h3>{productCardInfo.name}</h3>
          <div>${productCardInfo.default_price}</div>
          <div>Star Rating</div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default ProductCard;