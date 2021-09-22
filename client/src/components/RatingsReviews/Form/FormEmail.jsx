import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormEmail = ({ email, handleFormChange }) => {
  const [error, setError] = useState('');

  const handleChange = e => {
    setError('');
    if (e.target.value.length > 60) {
      setError('Exceeded 60 characters');
    }
    handleFormChange('email', e.target.value);
  };

  return (
    <TextField
      required
      label='Email'
      name='email'
      error={Boolean(error.length > 0)}
      helperText={error}
      value={email}
      onChange={e => handleChange(e)}
    />
  );
};

export default FormEmail;