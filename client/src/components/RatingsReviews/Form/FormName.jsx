import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormName = ({ field, form }) => {
  return (
    <TextField
      required
      label='Nickname'
      name='name'
      error={Boolean(form.errors.name)}
      helperText={form.errors.name}
      value={field.value}
      onChange={e => setFieldValue('name', e.target.value)}
    />
  );
};

export default FormName;
