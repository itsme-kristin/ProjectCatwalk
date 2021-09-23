import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormSummary = ({ form, field }) => {
  return (
    <TextField
      name='summary'
      label='Summary'
      error={Boolean(form.errors.summary)}
      helperText={form.errors.summary}
      onChange={(e) => form.setFieldValue('summary', e.target.value)}
    />
  );
};

export default FormSummary;
