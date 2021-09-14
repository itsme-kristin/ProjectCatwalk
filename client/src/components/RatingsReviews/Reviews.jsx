import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const Reviews = ({ currentProduct }) => {
  const [reviewData, setReviewData] = useState(null)

  useEffect(() => {
    axios.get(`/api/reviews/meta?product_id=${currentProduct.id}`)
      .then(({ data }) => {
        setReviewData(data);
      })
      .catch(() => {
        console.log('error getting review metadata')
      });
  }, []);

  return (
    <div>
      Ratings & Reviews
      <ProductBreakdown reviewData={reviewData} />
      <ReviewList currentProduct={currentProduct} />
    </div>
  )
}

export default Reviews;