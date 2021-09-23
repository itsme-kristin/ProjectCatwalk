import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormEmail = ({ form, field }) => {
  return (
    <TextField
      required
      label='Email'
      name='email'
      error={Boolean(form.errors.email)}
      helperText={form.errors.email}
      value={field.value}
      onChange={e => setFieldValue('email', e.target.value)}
    />
  );
};

export default FormEmail;