import React, { useState } from 'react';
import { Button, Modal, Grid, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UploadPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles({
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 450,
      'background-color': 'white',
      border: '2px solid #000',
      boxShadow: 24
    },
    thumb: {
      margin: '4px',
      width: '50px',
      height: '50px'
    }
  });
  const classes = useStyles();

  const renderedPhotos = photos.map((photo, index) => {
    return (
      <Grid key={index} item xs={2}>
        <Paper
          className={classes.thumb}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
          elevation={3}
        ></Paper>
      </Grid>
    );
  });

  const showAddPhotoButton =
    photos.length < 5 ? (
      <Button variant='outlined' onClick={e => setPhotos([...photos, url])}>
        Add Photo
      </Button>
    ) : null;

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={() => setOpen(true)}>
        Upload Photos
      </Button>
      <Modal open={open}>
        <Grid className={classes.modal} container spacing={2}>
          <Grid item xs={12} container>
            {renderedPhotos}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='url'
              label='Image URL'
              defaultValue={url}
              onChange={e => setUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={10}>
            {showAddPhotoButton}
            <Button variant='outlined' onClick={() => setOpen(false)}>Done</Button>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default UploadPhotos;
