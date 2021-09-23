import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup
} from '@material-ui/core';

const CharacteristicsRadio = ({ char, handleFormChange }) => {
  const [val, setVal] = useState(0);
  const [error, setError] = useState('Select an option');
  let labels = [];

  if (char[0] === 'Fit') {
    labels = [
      'None selected',
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ];
  } else if (char[0] === 'Length') {
    labels = [
      'None selected',
      'Runs short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ];
  } else if (char[0] === 'Quality') {
    labels = [
      'None selected',
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'
    ];
  } else if (char[0] === 'Comfort') {
    labels = [
      'None selected',
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ];
  } else if (char[0] === 'Width') {
    labels = [
      'None selected',
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'
    ];
  } else if (char[0] === 'Size') {
    labels = [
      'None selected',
      'A size too small',
      '1/2 a size too small',
      'Perfect',
      '1/2 a size too big',
      'A size too big'
    ];
  }

  const label = labels[val - 1];

  const handleChange = (e) => {
    setError('');
    setVal(Number(e.target.value))
    handleFormChange('characteristics', Number(e.target.value), char[1].id)
  }

  const helperText = error.length > 0 ? (
    <FormHelperText error>{error}</FormHelperText>
  ) : null;

  return (
    <FormControl component='fieldset' required>
      <FormLabel component='legend'>{char[0]}</FormLabel>
      {helperText}
      <Typography variant='caption'>{labels[val]}</Typography>
      <RadioGroup
        row
        aria-label={char[0]}
        name={char[0]}
        value={val}
        onChange={e => {
          setError('');
          setVal(Number(e.target.value));
          handleFormChange(`characteristics`, Number(e.target.value), char[1].id)
        }}
      >
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={<Typography variant='caption'>{labels[1]}</Typography>}
          labelPlacement='bottom'
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          labelPlacement='bottom'
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          labelPlacement='bottom'
        />
        <FormControlLabel
          value={4}
          control={<Radio />}
          labelPlacement='bottom'
        />
        <FormControlLabel
          value={5}
          control={<Radio />}
          label={<Typography variant='caption'>{labels[5]}</Typography>}
          labelPlacement='bottom'
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CharacteristicsRadio;
