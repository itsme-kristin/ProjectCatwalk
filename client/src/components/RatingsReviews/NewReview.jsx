import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
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
import CharacteristicsRadio from './CharacteristicsRadio.jsx';
import UploadPhotos from './UploadPhotos.jsx';
import FormRating from './Form/FormRating.jsx';
import FormSummary from './Form/FormSummary.jsx';
import FormBody from './Form/FormBody.jsx';
import FormRecommend from './Form/FormRecommend.jsx';
import FormCharacteristics from './Form/FormCharacteristics.jsx';
import FormName from './Form/FormName.jsx';
import FormEmail from './Form/FormEmail.jsx';

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '75vh',
    overflow: 'auto',
    width: '75vw',
    'background-color': 'white',
    border: '2px solid #000',
    boxShadow: 24
  }
});

const NewReview = ({ productId, characteristics }) => {
  const [open, setOpen] = useState(false);
  const reviewObj = {
    product_id: productId,
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

  const handleFormChange = (key, value, charKey) => {
    if (key === 'characteristics') {
      setReview({ ...review, [key]: { ...review[key], [charKey]: value } });
    } else {
      setReview({ ...review, [key]: value });
    }
  };

  const postReview = () => {
    axios
      .post('/api/reviews', review)
      .then(() => {
        console.log('Posted review');
      })
      .catch(() => {
        console.log('Error posting review');
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    postReview();
  };

  const charArray = Object.entries(characteristics);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Write New Review</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={e => handleSubmit(e)}>
          <Grid className={classes.modal} container spacing={2}>
            <Grid item xs={12}>
              <FormRating rating={review.rating} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormSummary summary={review.summary} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormBody body={review.body} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormRecommend recommend={review.recommend} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormCharacteristics charArray={charArray} characteristics={review.characteristics} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Photos</FormLabel>
                <UploadPhotos handleFormChange={handleFormChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormName name={review.name} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <FormEmail email={review.email} handleFormChange={handleFormChange} />
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' type='submit'>
                Submit Review
              </Button>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default NewReview;
