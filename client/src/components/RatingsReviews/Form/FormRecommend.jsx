import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio
} from '@material-ui/core';

const FormRecommend = ({ recommend, handleFormChange }) => {
  const [error, setError] = useState('Select an option');

  const handleChange = (e) => {
    setError('');
    handleFormChange('recommend', e.target.value === 'true')
  }

  const helperText = error.length > 0 ? (
    <FormHelperText error>{error}</FormHelperText>
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
        value={recommend}
        onChange={e => handleChange(e)}
      >
        <FormControlLabel value={true} control={<Radio />} label='Yes' />
        <FormControlLabel value={false} control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};

export default FormRecommend;
