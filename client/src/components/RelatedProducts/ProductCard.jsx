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
    cursor: 'pointer',
  },
  content: {
    cursor: 'pointer',
  },
  icon: {
    position: 'relative to parent',
    top: 5,
    cursor: 'pointer',
  },
  title: {
    fontWeight: '700',
  },
}));

const ProductCard = ({ currentProduct, cardId, setProductId }) => {
  const [productCardInfo, setProductCardInfo] = useState(null);
  const [productCardPhoto, setProductCardPhoto] = useState(null);
  const [productCardMeta, setProductCardMeta] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [featureData, setFeatureData] = useState(null);
  const classes = useStyles();


  const getFeatureData = () => {
    const featureData = {};

    for (let i = 0; i < currentProduct.features.length; i++) {
      let currentFeatureObject = currentProduct.features[i];
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
    setProductId(productCardInfo.id);
  }

  useEffect(() => {
    axios.get(`/api/products/${cardId}`)
      .then(productInfo => {
        setProductCardInfo(productInfo.data);
        return axios.get(`/api/products/${cardId}/styles`)
      }).then(stylesInfo => {
          setProductCardPhoto(stylesInfo.data.results[0]);
          return axios.get(`/api/reviews/meta?product_id=${cardId}`)
      }).then(meta => {
          setProductCardMeta(meta.data)
      })
      .catch(err => {
        console.info('There was an error retrieving product information and photo from the server.');
      });
  }, []);

  return productCardPhoto && productCardInfo && productCardMeta && (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid item align="right" xs={12}>
            <Icon onClick={openShowComparison} xs={{ fontSize: 10 }} className={classes.icon}>grade</Icon>
          </Grid>
        </Grid>
        <CardMedia
          component='div'
          className={classes.media}
          image={productCardPhoto.photos[0].thumbnail_url || 'https://media.istockphoto.com/photos/hangers-on-pole-picture-id91001400?b=1&k=20&m=91001400&s=170667a&w=0&h=Ni2lbk6vK2n9PuYSjZ0oR-Vsqfosr1UYuDuHhYmSboE='}
          title={productCardInfo.name}
          onClick={() => handleProductCardClick()}
        />
        <CardContent onClick={() => handleProductCardClick()} className={classes.content}>
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
              productMeta={productCardMeta}
            />
          </div>
        </CardContent>
      </Card>
      <Modal open={showComparison} onClose={closeShowComparison}  >
        <ComparisonModal featureData={featureData} productCardInfo={productCardInfo} currentProductInfo={currentProduct} />
      </Modal>
    </React.Fragment>
  );
}

export default ProductCard;