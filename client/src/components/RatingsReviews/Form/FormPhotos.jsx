import React from 'react';
import { FormControl, FormLabel } from '@material-ui/core';
import UploadPhotos from '../UploadPhotos.jsx';

const FormPhotos = ({ field, form }) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Photos</FormLabel>
      <br/>
      <UploadPhotos setFieldValue={form.setFieldValue} />
    </FormControl>
  );
};

export default FormPhotos;
