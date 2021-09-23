import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio
} from '@material-ui/core';

const FormRecommend = ({ field, form }) => {
  const helperText = form.errors.recommend ? (
    <FormHelperText error>{form.errors.recommend}</FormHelperText>
  ) : null;

  return (
    <FormControl
      component='fieldset'
      required
    >
      <FormLabel component='legend'>Do you recommend this product?</FormLabel>
      {helperText}
      <RadioGroup
        aria-label='recommend'
        name='recommend'
        row
        value={field.value}
        onChange={e => form.setFieldValue('recommend', e.target.value === 'true')}
      >
        <FormControlLabel value={true} control={<Radio />} label='Yes' />
        <FormControlLabel value={false} control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};

export default FormRecommend;
