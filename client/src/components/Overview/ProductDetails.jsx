import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StyleSelector from './StyleSelector.jsx';
import SocialMediaShare from './SocialMediaShare.jsx';
import AverageRating from '../AverageRating.jsx';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

const ProductDetails = ({product, productMeta, styles, styleIndex, setStyleIndex }) => {
  const classes = useStyles();
  const [stock, setStock] = useState([]);
  const [skuIndex, setSkuIndex] = useState('');
  const [selectedSku, setSelectedSku] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    var skus = {...styles[styleIndex]["skus"]};
    var availableStock = [];
    for (var sku in skus) {
      if (sku === 'null') {
        continue;
      }
      if (skus[sku].quantity !== 0) {
        availableStock.push({
          sku_id: sku,
          size: skus[sku].size,
          qty: skus[sku].quantity
        })
      }
    }
    setStock(availableStock);
    setSkuIndex('');
    setSelectedSku(null);
    setSelectedQty(null);
  }, [styles, styleIndex])

  const displayPrice = () => {
    if (styles[styleIndex]["sale_price"]) {
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography className={classes.salePrice} variant="h6">
              {styles[styleIndex]["sale_price"]}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline" gutterBottom>
            Original Price: <span className={classes.lineThrough}>{styles[styleIndex]["original_price"]}</span>
            </Typography>
          </Grid>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {styles[styleIndex]["original_price"]}
          </Typography>
        </React.Fragment>
      )
    }
  }

  const sizeChange = (e) => {
    if (e.target.value !== '') {
      setSelectedSku(stock[e.target.value]["sku_id"])
      setSelectedQty(1);
    } else {
      setSelectedSku(null)
      setSelectedQty(null)
    }
    setSkuIndex(e.target.value);
  }

  const sizeSelection = () => {
    if (stock.length === 0) {
      return null
    } else {
      return (
        <Select labelId="size" id="selectSize" value={skuIndex} displayEmpty={true} variant="outlined" fullWidth onChange={sizeChange}>
          <MenuItem value=''>Select Size</MenuItem>
          {stock.map(({ size }, skuIndex) => {
            return <MenuItem value={skuIndex} key={skuIndex}>{size}</MenuItem>
          })}
        </Select>
      )
    }
  };

  const qtyChange = (e) => {
    setSelectedQty(e.target.value)
  }

  const qtySelection = () => {
    if (stock.length === 0) {
      return null
    }
    if (skuIndex === '') {
      return (
        <Select labelId="qty" id="selectQty" value="" displayEmpty={true} variant="outlined" fullWidth disabled>
          <MenuItem value="">-</MenuItem>
        </Select>
      )
    } else {
      let maxQty = stock[skuIndex].qty < 15 ? stock[skuIndex].qty : 15
      var numArray = Array.from(Array(maxQty + 1).keys())
      numArray.shift()
      return (
        <Select labelId="qty" id="selectQty" value={selectedQty} displayEmpty={true} variant="outlined" fullWidth onChange={qtyChange}>
          {numArray.map((qty) => {
            return <MenuItem value={qty} key={qty}>{qty}</MenuItem>
          })}
        </Select>
      )
    }
  }

  const addProductToCart = () => {
    let data = {
      'sku_id': selectedSku
    }
    axios.post('/api/cart', data)
    .then(() => {
      console.log('Successfully added product to the cart')
    }).catch((err) => {
      console.log('Could not add product to the cart.')
    });
  }

  const addToCartButton = () => {
    if (stock.length === 0) {
      return (
        <Button variant="outlined" fullWidth disabled>Out Of Stock</Button>
      )
    }
    if (stock.length !== 0 && selectedSku === null) {
      return (
        <Button variant="outlined" fullWidth disabled>Add to Cart</Button>
      )
    }
    if (stock.length !==0 && selectedSku !== null) {
      return (
        <Button variant="contained" color="primary" fullWidth onClick={addProductToCart}>Add to Cart</Button>
      )
    }
  }

  return (
    <Grid container className={classes.root} direction="column" alignItems="stretch">
      <Grid container alignItems="center" className={classes.rating}>
        <AverageRating productMeta={productMeta} totalRatingsSetter={setTotalRatings}/>
        <Typography variant="caption" className={classes.reviewsLink}>
           <a href="#reviews">Read all {totalRatings} reviews</a>
        </Typography>
      </Grid>
      <Typography variant="h6">
        {product.category}
      </Typography>
      <Typography className={classes.category} variant="h3" gutterBottom>
        {product.name}
      </Typography>
      <Grid container className={classes.price}>
        {displayPrice()}
      </Grid>
       <StyleSelector
        styles={styles}
        styleIndex={styleIndex}
        setStyleIndex={setStyleIndex}
      />
      <Grid container spacing={1}>
        <Grid item xs={8}>
          {sizeSelection()}
        </Grid>
        <Grid item xs={4}>
          {qtySelection()}
        </Grid>
        <Grid item xs={12} md={8}>
          {addToCartButton()}
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialMediaShare
            productName={product.name}
            photoUrl={styles[styleIndex]["photos"][0]["thumbnail_url"]}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetails;