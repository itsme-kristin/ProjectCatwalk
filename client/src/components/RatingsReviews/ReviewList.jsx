import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewTile from './ReviewTile.jsx';
import NewReview from './NewReview.jsx';

const ReviewList = ({ reviews, currentProduct, selected, characteristics }) => {
  const [numOfReviews, setNumOfReviews] = useState(2);

  const useStyles = makeStyles({
    list: {
      maxHeight: '80vh',
      overflow: 'auto'
    }
  });

  const classes = useStyles();

  const renderedReviews = reviews
    .slice(0, numOfReviews)
    .map((review, index) => {
      return <ReviewTile key={index} review={review} />;
    });

  const showButton =
    renderedReviews.length < reviews.length ? (
      <Button
        variant='outlined'
        onClick={() => setNumOfReviews(numOfReviews + 2)}
      >
        More Reviews
      </Button>
    ) : null;

  return (
    <React.Fragment>
      <div className={classes.list}>
        {renderedReviews}
        <br />
      </div>
      <div>
        {showButton}
        <NewReview
          productId={currentProduct.id}
          characteristics={characteristics}
        />
      </div>
    </React.Fragment>
  );
};

export default ReviewList;
