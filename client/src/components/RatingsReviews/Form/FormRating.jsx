import React, { useState } from 'react';
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const FormRating = ({ field, form }) => {
  const helperText = form.errors.rating ? (
    <FormHelperText error>{form.errors.rating}</FormHelperText>
  ) : null;

  return (
    <FormControl component='fieldset' required>
      <FormLabel component='legend'>How do you rate this product?</FormLabel>
      <br/>
      {helperText}
      <Rating
        name='rating'
        onChange={(e, newValue) => {
          form.setFieldValue('rating', newValue)
        }}
      />
    </FormControl>
  );
};

export default FormRating;
