import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

const SortingDropdown = ({ selected, setSelected }) => {
  return (
    <FormControl>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <MenuItem value={'Most Recent'}>Most Recent</MenuItem>
        <MenuItem value={'Most Helpful'}>Most Helpful</MenuItem>
        <MenuItem value={'Most Relevant'}>Most Relevant</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortingDropdown;