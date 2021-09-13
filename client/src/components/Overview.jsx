import React from 'react';

import ProductDetails from './ProductDetails.jsx'
import ImageGallery from './ImageGallery.jsx'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    border: "dotted 1px grey",
  },

  prodOverview: {
    padding: "20px",
  }
});

const Overview = (props) => {
  const classes = useStyles();

  return (
      <Grid className={classes.root} container direction="row" justifyContent="flex-start" alignItems="flex-start" >
        <Grid item xs={7}>
          <ImageGallery />
        </Grid>
        <Grid item xs={5}>
          <ProductDetails />
        </Grid>
        <Grid item xs={12} className={classes.prodOverview}>
          <Typography variant="h5" gutterBottom>
            Product Overview/Description
          </Typography>
          <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget. Commodo elit at imperdiet dui accumsan. Et leo duis ut diam quam nulla. Vitae ultricies leo integer malesuada. Diam volutpat commodo sed egestas egestas fringilla phasellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Nunc mattis enim ut tellus elementum sagittis vitae et. Vel turpis nunc eget lorem dolor sed viverra. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Ultricies mi quis hendrerit dolor magna eget est lorem.
          </Typography>
        </Grid>
      </Grid>
  )
}

export default Overview;