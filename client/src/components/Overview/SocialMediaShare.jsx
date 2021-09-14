import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';

const useStyles = makeStyles({
  root: {

  }
})

const SocialMediaShare = ({ currentProduct, photoUrl }) => {
  const classes = useStyles();
  const iconSize = 32;

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <FacebookShareButton quote={`Check out my new ${currentProduct.name}`} hashtag="#ProjectCatwalk" url="http://localhost:3000">
          <FacebookIcon size={iconSize} round={true} />
        </FacebookShareButton>
      </Grid>
      <Grid item xs={4}>
        <TwitterShareButton title={currentProduct.name} hashtags={["#ProjectCatwalk"]} url="http://localhost:3000">
          <TwitterIcon size={iconSize} round={true} />
        </TwitterShareButton>
      </Grid>
      <Grid item xs={4}>
      <PinterestShareButton url="http://localhost:3000" media={photoUrl} description={`${currentProduct.name} from Project Catwalk`}>
        <PinterestIcon size={iconSize} round={true} />
      </PinterestShareButton>
      </Grid>
    </Grid>
  )

};


export default SocialMediaShare;