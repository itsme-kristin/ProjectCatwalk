import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const FormBody = ({ body, handleFormChange }) => {
  const [error, setError] = useState('');

  const handleChange = e => {
    setError('');
    if (e.target.value.length < 50) {
      setError('Must be at least 50 characters')
    }
    if (e.target.value.length > 1000) {
      setError('Exceeded 1000 characters');
    }
    handleFormChange('body', e.target.value);
  };

  return (
    <TextField
      required
      multiline
      name='body'
      label='Body'
      error={Boolean(error.length > 0)}
      helperText={error}
      value={body}
      onChange={e => handleChange(e)}
    />
  );
};

export default FormBody;