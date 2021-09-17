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
// import CharacteristicsRadio from './CharacteristicsRadio.jsx';

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

const NewReview = ({ characteristics }) => {
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

  // const charArray = Object.entries(characteristics);
  // const renderedChars = charArray.map((char, index) => {
  //   return <CharacteristicsRadio key={index} char={char} />;
  // });

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
                aria-label='recommend'
                name='recommend'
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
          {/*<Grid item xs={12}>
            <FormControl component='fieldset' required>
              <FormLabel component='legend'>
                Characteristics
              </FormLabel>
              <RadioGroup
                aria-label='characteristics'
                name='characteristics'
                value={review.characteristics}
              >
                {renderedChars}
              </RadioGroup>
            </FormControl>
          </Grid>*/}
          <Grid item xs={12}>
            <TextField
              required
              label='Nickname'
              name='name'
              defaultValue={review.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name='email'
              label='Email'
              defaultValue={review.email}
            />
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default NewReview;
