import React, { useState } from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  Modal,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    'background-color': 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }
});

const NewReview = () => {
  const [open, setOpen] = useState(false);
  const reviewObj = {
    product_id: null,
    rating: 0,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  };
  const [review, setReview] = useState(reviewObj);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Write New Review</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Grid className={classes.modal} container spacing={2}>
          <Grid item xs={12}>
            <FormControl component='fieldset' required>
              <FormLabel component='legend'>
                Do you recommend this product?
              </FormLabel>
              <Rating
                name='overall-rating'
                value={review.rating}
                onChange={(e, newValue) => {
                  reviewObj.rating = newValue;
                  setReview(reviewObj);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='summary'
              label='Summary'
              defaultValue={review.summary}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              multiline
              rows={3}
              name='body'
              label='Body'
              defaultValue={review.body}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component='fieldset' required>
              <FormLabel component='legend'>
                Do you recommend this product?
              </FormLabel>
              <RadioGroup
                aria-label='gender'
                name='controlled-radio-buttons-group'
                value={review.recommend}
                onChange={e => {
                  reviewObj.recommend = e.target.value;
                  setReview(reviewObj);
                }}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label='Yes'
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label='No'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormLabel required component='legend'>
              What is your nickname?
            </FormLabel>
            <TextField
              required
              name='name'
              defaultValue={review.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name='email'
              label='What is your email?'
              defaultValue={review.email}
            />
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default NewReview;
