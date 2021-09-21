import React, { useState } from 'react';
import { Grid, Paper, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  thumb: {
    margin: '4px',
    width: '50px',
    height: '50px'
  }
});

const ReviewPhoto = ({ photo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const photoUrl = typeof photo === 'object' ? photo.url : photo;

  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Paper
          className={classes.thumb}
          onClick={() => setOpen(true)}
          style={{
            backgroundImage: `url(${photoUrl})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
          elevation={3}
        ></Paper>
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Grid className={classes.modal}>
          <img src={photoUrl} />
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default ReviewPhoto;
