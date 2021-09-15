import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';

const useStyles = makeStyles({
  cartButton: {
    cursor: 'pointer'
  },

  cartHeadValue: {
    fontWeight: 700
  },

  cartHeadBox: {
    borderBottom: 'solid 2px black'
  },

  cartModal: {
    position: 'absolute',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px'
  },
})

const SocialMediaShare = ({ productName, photoUrl }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartData, setCartData] = useState(['Empty Cart'])
  const classes = useStyles();
  const iconSize = 32;
  const productURL = 'http://localhost:3000';

  const openShoppingCart = () => {
    axios.get('/api/cart')
    .then(({ data }) => {
      setCartData(data)
      setCartOpen(true)
    }).catch((err) => {
      console.log('Unable to retrieve cart data')
    })
  }

  const closeShoppingCart = () => {
    setCartOpen(false)
  }

  const shoppingCartModal = (
      <Paper elevation={3} className={classes.cartModal}>
        <Typography variant="h5" gutterBottom>
          Your Shopping Cart:
        </Typography>
        <Grid container>
          <Grid item xs={10} className={classes.cartHeadBox}>
            <span className={classes.cartHeadValue}>SKU:</span>
          </Grid>
          <Grid item xs={2} className={classes.cartHeadBox}>
            <span className={classes.cartHeadValue}>Qty:</span>
          </Grid>
        {cartData.map(({ sku_id, count }, cartIndex) => {
          return (
            <React.Fragment key={cartIndex}>
              <Grid item xs={10}>
                {sku_id}
              </Grid>
              <Grid item xs={2}>
                {count}
              </Grid>
            </React.Fragment>
          )
        })}
        </Grid>
      </Paper>
  )

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} className={classes.cartButton} onClick={openShoppingCart}>
        <i className="material-icons" style={{ fontSize: `${iconSize}px`}}>shopping_cart</i>
      </Grid>
      <Grid item xs={12} md={3}>
        <FacebookShareButton quote={`Check out my new ${productName}`} hashtag="#ProjectCatwalk" url={productURL}>
          <FacebookIcon size={iconSize} round={true} />
        </FacebookShareButton>
      </Grid>
      <Grid item xs={12} md={3}>
        <TwitterShareButton title={productName} hashtags={["#ProjectCatwalk"]} url={productURL}>
          <TwitterIcon size={iconSize} round={true} />
        </TwitterShareButton>
      </Grid>
      <Grid item xs={12} md={3}>
      <PinterestShareButton media={photoUrl} description={`${productName} from Project Catwalk`} url={productURL}>
        <PinterestIcon size={iconSize} round={true} />
      </PinterestShareButton>
      </Grid>
      <Modal open={cartOpen} onClose={closeShoppingCart}>
        {shoppingCartModal}
      </Modal>
    </Grid>
  )
};


export default SocialMediaShare;