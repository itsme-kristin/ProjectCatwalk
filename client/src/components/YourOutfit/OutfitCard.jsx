import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import AverageRating from '../AverageRating.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    height: 330,
  },
  media: {
    paddingTop: '70.60%',
  },
  content: {
    paddingTop: '10%',
  },
  icon: {
    position: "relative to parent",
    top: 5,
  }
}));

const OutfitCard = (props) => {
  const [outfitCardInfo, setOutfitCardInfo] = useState(null);
  const [outfitCardPhoto, setOutfitCardPhoto] = useState(null);
  const [ratingsInfo, setRatingsInfo] = useState({
    avgProductRating: 0,
    totalRatings: 0
    });
  const classes = useStyles();

  const getPhoto = () => {
    axios.get(`/api/products/${props.product.id}/styles`)
      .then(stylesInfo => {
        setOutfitCardPhoto(stylesInfo.data.results[0]);
      })
      .catch(err => {
        console.info('There was an error getting product photo from the server.');
      });
  }

  const getProductInfo = () => {
    axios.get(`/api/products/${props.product.id}`)
      .then(productInfo => {
        setOutfitCardInfo(productInfo.data);
      })
      .catch(err => {
        console.info('There was an error retrieving product information from the server.');
      });
  }

  useEffect(() => {
    getPhoto();
    getProductInfo();
  }, []);


  return outfitCardPhoto && outfitCardInfo && (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Icon onClick={() => props.handleDeleteOutfitClick(props.product.id)} sx={{ fontSize: 10 }} className={classes.icon}>highlight_off</Icon>
        <CardMedia
          component='div'
          className={classes.media}
          image={outfitCardPhoto.photos[0].thumbnail_url || ''}
          title={outfitCardInfo.name}
        />
        <CardContent>
          <div>{outfitCardInfo.category}</div>
          <h3>{outfitCardInfo.name}</h3>
          <div>${outfitCardInfo.default_price}</div>
          <div>
            <AverageRating
                productId={props.product.id}
                avgProductRating={ratingsInfo.avgProductRating}
                setRatingsInfo={setRatingsInfo}
            />
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default OutfitCard;