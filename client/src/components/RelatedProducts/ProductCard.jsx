import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import AverageRating from '../AverageRating.jsx';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import ComparisonModal from './ComparisonModal.jsx';


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
  }
}));

const ProductCard = (props) => {
  const [productCardInfo, setProductCardInfo] = useState(null);
  const [productCardPhoto, setProductCardPhoto] = useState(null);
  const [ratingsInfo, setRatingsInfo] = useState({
          avgProductRating: 0,
          totalRatings: 0
          });
  const [showComparison, setShowComparison] = useState(false);
  const classes = useStyles();

  const openShowComparison = () => {
    setShowComparison(true);
  }

  const closeShowComparison = () => {
    setShowComparison(false);
  }

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

  const handleProductCardClick = () => {
    props.setProduct(productCardInfo);
  }

  useEffect(() => {
    getPhoto();
    getProductInfo();
  }, []);

  //will add to card once bug is fixed:
  //onClick={() => handleProductCardClick()}
  return productCardPhoto && productCardInfo && (
    <React.Fragment>
      <Card className={classes.root} variant="outlined" onClick={() => handleProductCardClick()}>
        <Icon onClick={openShowComparison} sx={{ fontSize: 10 }} className={classes.icon}>grade</Icon>
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
          <div>
            <AverageRating
                productId={props.productId}
                avgProductRating={ratingsInfo.avgProductRating}
                setRatingsInfo={setRatingsInfo}
              />
          </div>
        </CardContent>
      </Card>
      <Modal open={showComparison} onClose={closeShowComparison} productcardinfo={productCardInfo}>
        <ComparisonModal />
      </Modal>
    </React.Fragment>
  );
}

export default ProductCard;