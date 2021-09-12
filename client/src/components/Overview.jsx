import React from 'react';

import ProductDetails from './ProductDetails.jsx'
import ImageGallery from './ImageGallery.jsx'

const Overview = (props) => {
  // TEMPORARY STYLING
  var styles = {
    width: "maxWidth",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }

  return (
    <div>
      <div style={styles}>
        <ImageGallery />
        <ProductDetails />
      </div>
      <div>
        <h2>Product Overview/Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget. Commodo elit at imperdiet dui accumsan. Et leo duis ut diam quam nulla. Vitae ultricies leo integer malesuada. Diam volutpat commodo sed egestas egestas fringilla phasellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Nunc mattis enim ut tellus elementum sagittis vitae et. Vel turpis nunc eget lorem dolor sed viverra. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Ultricies mi quis hendrerit dolor magna eget est lorem.</p>
      </div>
    </div>
  )
}

export default Overview;