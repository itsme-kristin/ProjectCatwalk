import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import AverageRating from '../AverageRating.jsx';
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
  icon: {
    position: "relative to parent",
    top: 5,
    cursor: 'pointer',
  },
  title: {
    fontWeight: '700',
  },
  salePrice: {
    color: 'red',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
}));

const OutfitCard = ({ handleDeleteOutfitClick, product }) => {
  const [outfitCardInfo, setOutfitCardInfo] = useState(null);
  const [outfitCardPhoto, setOutfitCardPhoto] = useState(null);
  const [outfitCardMeta, setOutfitCardMeta] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`/api/products/${product.id}`)
      .then(productInfo => {
        setOutfitCardInfo(productInfo.data);
        return axios.get(`/api/products/${product.id}/styles`)
      }).then(stylesInfo => {
          setOutfitCardPhoto(stylesInfo.data.results[0]);
          return axios.get(`/api/reviews/meta?product_id=${product.id}`)
      }).then(meta => {
          setOutfitCardMeta(meta.data)
      })
      .catch(err => {
        console.info('There was an error retrieving product information and photo from the server.');
      });
  }, []);

  const getOutfitSalePrice = () => {
    if (outfitCardPhoto.sale_price) {
      return (
        <Grid container>
          <Grid item align="left" xs={6} className={classes.salePrice}>
            <Typography>
              SALE! ${outfitCardPhoto.sale_price}
            </Typography>
          </Grid>
          <Grid item align="center" xs={6} className={classes.lineThrough}>
            <Typography>
              ${outfitCardInfo.default_price}
            </Typography>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <React.Fragment>
          <Typography>
          ${outfitCardInfo.default_price}
          </Typography>
        </React.Fragment>
      )
    }
  }

  return outfitCardPhoto && outfitCardInfo && outfitCardMeta && (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid item align="right" xs={12}>
            <Icon onClick={() => handleDeleteOutfitClick(product.id)} sx={{ fontSize: 10 }} className={classes.icon}>highlight_off</Icon>
          </Grid>
        </Grid>
        <CardMedia
          component='div'
          className={classes.media}
          image={outfitCardPhoto.photos[0].thumbnail_url || 'https://media.istockphoto.com/photos/hangers-on-pole-picture-id91001400?b=1&k=20&m=91001400&s=170667a&w=0&h=Ni2lbk6vK2n9PuYSjZ0oR-Vsqfosr1UYuDuHhYmSboE='}
          title={outfitCardInfo.name}
        />
        <CardContent>
          <Typography>
            {outfitCardInfo.category}
          </Typography>
          <Typography className={classes.title} variant="h6">
            {outfitCardInfo.name}
          </Typography>
          <div>
            {getOutfitSalePrice()}
          </div>
          <div>
            <AverageRating
                productMeta={outfitCardMeta}
            />
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default OutfitCard;