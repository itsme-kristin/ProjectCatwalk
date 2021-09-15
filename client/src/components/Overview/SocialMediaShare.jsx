import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';

const useStyles = makeStyles({
  cartButton: {
    cursor: 'pointer'
  }
})

const SocialMediaShare = ({ currentProduct, photoUrl }) => {
  const classes = useStyles();
  const iconSize = 32;
  const productURL = 'http://localhost:3000';

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} className={classes.cartButton}>
        <i className="material-icons" style={{ fontSize: `${iconSize}px`}}>shopping_cart</i>
      </Grid>
      <Grid item xs={12} md={3}>
        <FacebookShareButton quote={`Check out my new ${currentProduct.name}`} hashtag="#ProjectCatwalk" url={productURL}>
          <FacebookIcon size={iconSize} round={true} />
        </FacebookShareButton>
      </Grid>
      <Grid item xs={12} md={3}>
        <TwitterShareButton title={currentProduct.name} hashtags={["#ProjectCatwalk"]} url={productURL}>
          <TwitterIcon size={iconSize} round={true} />
        </TwitterShareButton>
      </Grid>
      <Grid item xs={12} md={3}>
      <PinterestShareButton media={photoUrl} description={`${currentProduct.name} from Project Catwalk`} url={productURL}>
        <PinterestIcon size={iconSize} round={true} />
      </PinterestShareButton>
      </Grid>
    </Grid>
  )

};


export default SocialMediaShare;