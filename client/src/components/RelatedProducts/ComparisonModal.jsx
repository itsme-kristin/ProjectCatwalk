import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  title: {
    fontWeight: '700',
    color: 'rgb(63, 81, 181)',
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

  comparisonContentBox: {
    borderBottom: 'solid 1px grey',
    padding: '15px',
  }
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
          <span className={classes.comparisonHeaderValue}>
            <Typography className={classes.title}>{currentProductInfo.name}</Typography>
          </span>
        </Grid>
        <Grid item align="center" xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>
            <Typography className={classes.title}>Features</Typography>
          </span>
        </Grid>
        <Grid item align="right" xs={4} className={classes.comparisonHeaderBox}>
          <span className={classes.comparisonHeaderValue}>
            <Typography className={classes.title}>{productCardInfo.name}</Typography>
          </span>
        </Grid>
        {Object.keys(featureData).map((feature, index) => {
          return (
            <React.Fragment key={index}>
              <Grid container className={classes.comparisonContentBox}>
                <Grid item align="left" xs={4}>
                  {featureData[feature][0] === "yes!" ? <Icon xs={{ fontSize: 8}}>check</Icon> : <span><Typography>{featureData[feature][0]}</Typography></span>}
                </Grid>
                <Grid item align="center" xs={4}>
                  <span>
                    <Typography>{feature}</Typography>
                  </span>
                </Grid>
                <Grid item align="right" xs={4}>
                {featureData[feature][1] === "yes!" ? <Icon xs={{ fontSize: 8}}>check</Icon> : <span><Typography>{featureData[feature][1]}</Typography></span>}
                </Grid>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
    </Paper>
  )
});

export default ComparisonModal;