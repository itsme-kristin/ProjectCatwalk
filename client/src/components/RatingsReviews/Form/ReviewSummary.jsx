import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const ReviewSummary = ({ summary, handleFormChange }) => {
  const [error, setError] = useState('');

  const handleChange = e => {
    setError('');
    if (e.target.value.length > 60) {
      setError('Exceeded 60 characters');
    }
    handleFormChange('summary', e.target.value);
  };

  return (
    <TextField
      name='summary'
      label='Summary'
      value={summary}
      error={Boolean(error.length > 0)}
      helperText={error}
      onChange={e => handleChange(e)}
    />
  );
};

export default ReviewSummary;
