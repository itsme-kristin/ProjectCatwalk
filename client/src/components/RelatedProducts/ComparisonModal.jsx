import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  comparisonHeaderValue: {
    fontWeight: 700
  },

  comparisonHeaderBox: {
    borderBottom: 'solid 2px black'
  },

  comparisonModal: {
    position: 'absolute',
    width: 500,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px'
  },
});

const ComparisonModal = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Paper className={classes.comparisonModal}>
      <Typography variant="h5" gutterBottom>
        COMPARING:
      </Typography>
      <Grid container>
        <Grid item xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>Current Product</span>
        </Grid>
        <Grid item xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}></span>
        </Grid>
        <Grid item xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue} justify-content="right">Product Card Title</span>
        </Grid>
      </Grid>
    </Paper>
  )
});

export default ComparisonModal;