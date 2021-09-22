import React, {useState} from 'react';
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import CharacteristicsRadio from '../CharacteristicsRadio.jsx';

const FormCharacteristics = ({ charArray, characteristics, handleFormChange }) => {
  const renderedChars = charArray.map((char, index) => {
    return (
      <CharacteristicsRadio
        key={index}
        char={char}
        handleFormChange={handleFormChange}
      />
    );
  });
  return (
    <FormControl component='fieldset' required>
    <FormLabel component='legend'>Characteristics</FormLabel>
    <RadioGroup
      aria-label='characteristics'
      name='characteristics'
      value={characteristics}
    >
      {renderedChars}
    </RadioGroup>
  </FormControl>
  )
}

export default FormCharacteristics;