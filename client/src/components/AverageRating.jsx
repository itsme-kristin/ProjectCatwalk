import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';

const getRatingInfo = (ratings) => {
  const weight = 5;
  let sum = 0;
  let ratingCount = 0;

  for (let rating in ratings) {
    let ratingInt = parseInt(rating)
    let ratingVal = parseInt(ratings[rating])
    sum += ratingInt * ratingVal
    ratingCount += ratingVal
  }

  let average = (sum / (ratingCount * weight)) * weight

  return {
    avgProductRating: average,
    totalRatings: ratingCount
  }
};


/** READ ME **
 *  you need to set a useState constant on the Componenet where you're calling
 *  AverageRating From: like so:
 *
 *  const [ratingsInfo, setRatingsInfo] = useState({
 *    avgProductRating: 0,
 *    totalRatings: 0
 *  })
 *
 *  Pass the product id, the ratingsInfo.avgProductRating and the setter as props
 *  Doing so will give your component access to ratingsInfo.totalRatings for use.
 *  This may need to be refactored later...
 */


const AverageRating = ({ productId, avgProductRating, setRatingsInfo }) => {

  useEffect(() => {
    axios.get(`api/reviews/meta?product_id=${productId}`)
    .then(({ data }) => {
      setRatingsInfo(getRatingInfo(data.ratings))
    }).catch((err) => {
      console.log('Unable to retrieve ratings info', err);
    })
  }, [productId]);

  if (avgProductRating === null) {
    return <CircularProgress />
  }

  return (
    <React.Fragment>
      <Rating name="avgProductRating" value={avgProductRating}  precision={0.25} readOnly />
    </React.Fragment>
  )
}

export default AverageRating;