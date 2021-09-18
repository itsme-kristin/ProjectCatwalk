import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import AverageRating from '../AverageRating.jsx';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import ComparisonModal from './ComparisonModal.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    height: 350,
  },
  media: {
    paddingTop: '70.25%',
  },
  content: {
    paddingTop: '10%',
  },
  icon: {
    position: 'relative to parent',
    top: 5,
  },
  title: {
    fontWeight: '700',
  },
}));

const ProductCard = (props) => {
  const [productCardInfo, setProductCardInfo] = useState(null);
  const [productCardPhoto, setProductCardPhoto] = useState(null);
  const [ratingsInfo, setRatingsInfo] = useState({
    avgProductRating: 0,
    totalRatings: 0
  });
  const [currentProductInfo, setCurrentProductInfo] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [featureData, setFeatureData] = useState(null);
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

  const getCurrentProductInfo = () => {
    axios.get(`/api/products/${props.currentProduct.id}`)
      .then(productInfo => {
        setCurrentProductInfo(productInfo.data);
      })
      .catch(err => {
        console.info('There was an error retrieving product information from the server.');
      });
  }

  const getFeatureData = () => {
    const featureData = {};

    for (let i = 0; i < currentProductInfo.features.length; i++) {
      let currentFeatureObject = currentProductInfo.features[i];
      let currentFeatureValue = [];
      if (currentFeatureObject.value === null) {
        currentFeatureValue.push('yes!');
      } else {
        currentFeatureValue.push(currentFeatureObject.value);
      }
      currentFeatureValue.push('');
      featureData[currentFeatureObject.feature] = currentFeatureValue;
    }

    for (let j = 0; j < productCardInfo.features.length; j++) {
      let currentFeatureObject = productCardInfo.features[j];
      if (featureData[currentFeatureObject.feature] !== undefined) {
        if (currentFeatureObject.value === null) {
          featureData[currentFeatureObject.feature] = 'yes!';
        } else {
          featureData[currentFeatureObject.feature][1] = currentFeatureObject.value;
        }
      } else {
        let currentFeatureValue = [];
        currentFeatureValue.push('');
        if (currentFeatureObject.value === null) {
          currentFeatureValue.push('yes!');
        } else {
          currentFeatureValue.push(currentFeatureObject.value);
        }
        featureData[currentFeatureObject.feature] = currentFeatureValue;
      }
    }
    setFeatureData(featureData);
  }

  const openShowComparison = () => {
    setShowComparison(true);
    getFeatureData();
  }

  const closeShowComparison = () => {
    setShowComparison(false);
  }

  const handleProductCardClick = () => {
    props.setProduct(productCardInfo);
  }

  useEffect(() => {
    getPhoto();
    getProductInfo();
    getCurrentProductInfo();
  }, []);

  return productCardPhoto && productCardInfo && (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid item align="right" xs={12}>
            <Icon onClick={openShowComparison} sx={{ fontSize: 10 }} className={classes.icon}>grade</Icon>
          </Grid>
        </Grid>
        <CardMedia
          component='div'
          className={classes.media}
          image={productCardPhoto.photos[0].thumbnail_url || 'https://media.istockphoto.com/photos/hangers-on-pole-picture-id91001400?b=1&k=20&m=91001400&s=170667a&w=0&h=Ni2lbk6vK2n9PuYSjZ0oR-Vsqfosr1UYuDuHhYmSboE='}
          title={productCardInfo.name}
          onClick={() => handleProductCardClick()}
        />
        <CardContent onClick={() => handleProductCardClick()}>
          <Typography >
            {productCardInfo.category}
          </Typography>
          <Typography className={classes.title} variant="h6">
            {productCardInfo.name}
          </Typography>
          <Typography>
            ${productCardInfo.default_price}
          </Typography>
          <div>
            <AverageRating
              productId={props.productId}
              avgProductRating={ratingsInfo.avgProductRating}
              setRatingsInfo={setRatingsInfo}
            />
          </div>
        </CardContent>
      </Card>
      <Modal open={showComparison} onClose={closeShowComparison}  >
        <ComparisonModal featureData={featureData} productCardInfo={productCardInfo} currentProductInfo={currentProductInfo} />
      </Modal>
    </React.Fragment>
  );
}

export default ProductCard;