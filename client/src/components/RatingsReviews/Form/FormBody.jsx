import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const FormBody = ({ form, field }) => {
  return (
    <TextField
      required
      multiline
      name='body'
      label='Body'
      error={Boolean(form.errors.body)}
      helperText={form.errors.body}
      onChange={e => form.setFieldValue('body', e.target.value)}
    />
  );
};

export default FormBody;