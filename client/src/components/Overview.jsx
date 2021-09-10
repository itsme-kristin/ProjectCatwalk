import React from 'react';

import ProductDetails from './ProductDetails.jsx'
import ImageGallery from './ImageGallery.jsx'

const Overview = () => {
  var styles = {
    width: "maxWidth",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }

  return (
    <div className="container" style={styles}>
      <ImageGallery />
      <ProductDetails />
    </div>
  )
}

export default Overview;