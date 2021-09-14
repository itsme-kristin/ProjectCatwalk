import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const FeedbackButton = ({ helpfulness, id }) => {
  const [feedback, setFeedback] = useState(helpfulness);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    axios
      .put(`/api/reviews/${id}/helpful`)
      .catch(() => {
        console.log('error updating helpfulness');
      })
      .then(() => {
        setFeedback(feedback + 1);
        setIsDisabled(true);
      });
  };

  return isDisabled ? (
    <Button disabled>Yes ({feedback})</Button>
  ) : (
    <Button onClick={() => handleClick()}>Yes ({feedback})</Button>
  );
};

export default FeedbackButton;
