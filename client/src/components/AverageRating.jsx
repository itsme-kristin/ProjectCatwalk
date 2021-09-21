import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';

const getRatingInfo = (ratings) => {
  if (ratings.length === 0) {
    return {
      average: 0,
      total: 0
    }
  }

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
    average: parseFloat(average.toFixed(1)),
    total: ratingCount
  }
};


/**
 *  AverageRating 2.0
 *  <<<< READ ME >>>>
 *
 *  IMPLEMENTATION:
 *  Simply pass in the productMeta as a prop called productMeta to the
 *  AverageRating component, and it will do the rest.
 *
 *  EXAMPLE:
 *  <AverageRating productMeta={productMeta} />
 *
 *  OPTIONS:
 *
 *  If you want the total reviews count, setup a state in your parent component
 *  to store the total, and then send the setter back through the totalRatingsSetter prop
 *
 *  EXAMPLE:
 *  const [totalRatings, setTotalRatings] = useState(0);
 *  <AverageRating productMeta={productMeta} totalRatingsSetter={setTotalRatings} />
 *
 *  If you want the average rating value, setup a state in your parent component
 *  to store the average, and then send the setter back through the averageRatingSetter prop
 *
 *  EXAMPLE:
 *  const [averageValue, setAverageValue] = useState(0);
 *  <AverageRating productMeta={productMeta} averageRatingSetter={setAverageRating} />
 *
 *  You can indicate if you always want the Rating to show, even if there
 *  are no reviews by setting a "alwaysShow" prop to true.
 *
 *  EXAMPLE:
 *  <AverageRating productMeta={productMeta} alwaysShow={true} />
 *
 **/


const AverageRating = ({ productMeta , alwaysShow = false, totalRatingsSetter, averageRatingSetter }) => {
  const [ratingInfo, setRatingInfo] = useState(getRatingInfo(productMeta.ratings))

  useEffect(() => {
      if (totalRatingsSetter) {
        totalRatingsSetter(ratingInfo.total)
      }
      if (averageRatingSetter) {
        averageRatingSetter(ratingInfo.average)
      }
  }, [productMeta]);


  if (ratingInfo.average === 0 && !alwaysShow) {
    return null
  }

  return (
    <React.Fragment>
      <Rating name="averageRating" value={ratingInfo.average}  precision={0.25} readOnly />
    </React.Fragment>
  )
}

export default AverageRating;