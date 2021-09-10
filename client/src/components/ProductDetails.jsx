import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const ProductDetails = () => {

  var styles = {
    flexGrow: "1",
    border: "solid 1px black",
    padding: "15px",
    textAlign: "left",
  }

  var styles2 = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "10px",
  }

  var styles3 = {
    width: "50px",
    height: "50px",
    border: "solid 1px black",
    borderRadius: "25px",
  }

  return (
    <div style={styles}>
      <p>Star Rating (read all reviews)</p>
      <h3>Category</h3>
      <h1>Product Name</h1>
      <p>Price</p>
      <div>
        <div><h3><span>Style ></span> Selected Style</h3></div>
        <div>
          <div style={styles2}>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
          </div>
          <div style={styles2}>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
            <div style={styles3}>S</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <TextField variant="outlined" defaultValue="Select Size"></TextField>
          <Select variant="outlined" label="Qty">
            <MenuItem>1</MenuItem>
          </Select>
        </div>
        <div>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;