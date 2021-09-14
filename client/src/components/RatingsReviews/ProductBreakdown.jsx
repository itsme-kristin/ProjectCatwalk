import React from 'react';

const ProductBreakdown = ({ reviewData }) => {
  if (reviewData) {
    const { Comfort, Fit, Length, Quality } = reviewData.characteristics
    console.log(Comfort)
    return (
      <div>
        Yoo
      </div>
    )
  } else {
    return null;
  }
};

export default ProductBreakdown;