import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({});

const ExpandedView = React.forwardRef((props, ref) => {

  return (
    <Grid container>
      <Typography>
        Hey There!
      </Typography>
    </Grid>
  )

});

export default ExpandedView