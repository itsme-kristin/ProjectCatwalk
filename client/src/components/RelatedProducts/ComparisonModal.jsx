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
    borderBottom: 'solid 2px black',
    alignItems: 'center'
  },

  comparisonModal: {
    position: 'absolute',
    width: 600,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px'
  },
});

const ComparisonModal = React.forwardRef(({ featureData, productCardInfo, currentProductInfo }, ref) => {
  const classes = useStyles();

  return (
    <Paper className={classes.comparisonModal}>
      <Typography variant="h5" gutterBottom>
        COMPARING:
      </Typography>
      <Grid container>
        <Grid item align="left" xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>{currentProductInfo.name}</span>
        </Grid>
        <Grid item align="center" xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>Features</span>
        </Grid>
        <Grid item align="right" xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>{productCardInfo.name}</span>
        </Grid>
        {Object.keys(featureData).map((feature, index) => {
          return (
            <React.Fragment key={index}>
              <Grid item align="left" xs={4}>
                <span>{featureData[feature][0]}</span>
              </Grid>
              <Grid item align="center" xs={4}>
                <span>{feature}</span>
              </Grid>
              <Grid item align="right" xs={4}>
                <span>{featureData[feature][1]}</span>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
    </Paper>
  )
});

export default ComparisonModal;