import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    border: "dotted 1px grey",
    padding: "20px"
  },

  category: {
    fontWeight: "700"
  },

  reviewsLink: {
    marginLeft: "10px",
    textDecoration: "underline"
  },

  temp: {
    minHeight: "200px",
    border: "dotted 1px grey",
    marginBottom: "20px"
  }
})

const ProductDetails = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="column" justifyContent="flex-start" alignItems="stretch">
      <Grid container direction="row" alignItems="center">
        <Rating name="avgProductRating" value={3.7}  precision={0.25} readOnly />
        <Typography variant="caption" className={classes.reviewsLink}>
           Read all # reviews
        </Typography>
      </Grid>
      <Typography variant="h6">
        Category
      </Typography>
      <Typography className={classes.category} variant="h3" gutterBottom>
        Product Name
      </Typography>
      <Typography variant="h6" gutterBottom>
        $369.00
      </Typography>
      <Grid container alignItems="center" className={classes.temp} justifyContent="center">
        <Typography variant="overline">
          Styles Select Component
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="flex-start" spacing={1}>
        <Grid item xs={8}>
          <TextField variant="outlined" defaultValue="Select Size" fullWidth></TextField>
        </Grid>
        <Grid item xs={2}>
          <Select variant="outlined" label="Qty">
            <MenuItem>1</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetails;