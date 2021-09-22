import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormName = ({ name, handleFormChange }) => {
  const [error, setError] = useState('');

  const handleChange = e => {
    setError('');
    if (e.target.value.length > 60) {
      setError('Exceeded 60 characters');
    }
    handleFormChange('name', e.target.value);
  };

  return (
    <TextField
      required
      label='Nickname'
      name='name'
      error={Boolean(error.length > 0)}
      helperText={error}
      value={name}
      onChange={e => handleChange(e)}
    />
  );
};

export default FormName;
