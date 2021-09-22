import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

const FormRecommend = ({ recommend, handleFormChange }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    handleFormChange('recommend', e.target.value === 'true')
  }

  return (
    <FormControl
      component='fieldset'
      required
      error={Boolean(error)}
    >
      <FormLabel component='legend'>Do you recommend this product?</FormLabel>
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
