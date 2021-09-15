import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
});

const Cart = React.forwardRef(({cartData}, ref) => {
  const classes = useStyles();

  return (
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
});

export default Cart;