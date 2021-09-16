import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

const SortingDropdown = ({ selected, setSelected }) => {
  return (
    <FormControl>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <MenuItem value={'relevant'}>Most Relevant</MenuItem>
        <MenuItem value={'newest'}>Most Recent</MenuItem>
        <MenuItem value={'helpful'}>Most Helpful</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortingDropdown;