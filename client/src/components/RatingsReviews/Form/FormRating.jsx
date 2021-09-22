import React, { useState } from 'react';
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const FormRating = ({ rating, handleFormChange }) => {
  const [error, setError] = useState('Select a rating');

  const handleChange = (value) => {
    setError('')
    handleFormChange('rating', value)
  }

  const helperText = error.length > 0 ? (
    <FormHelperText error>{error}</FormHelperText>
  ) : null;

  return (
    <FormControl component='fieldset' required>
      <FormLabel component='legend'>How do you rate this product?</FormLabel>
      {helperText}
      <Rating
        name='overall-rating'
        value={rating}
        onChange={(e, newValue) => handleChange(newValue)}
      />
    </FormControl>
  );
};

export default FormRating;
