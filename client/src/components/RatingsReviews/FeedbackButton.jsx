import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const FeedbackButton = ({ helpfulness, id }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    axios
      .put(`/api/reviews/${id}/helpful`)
      .catch(() => {
        console.log('error updating helpfulness');
      })
      .then(() => {
        setIsDisabled(true);
      });
  };

  return isDisabled ? (
    <React.Fragment>
      <Button disabled>Yes ({helpfulness + 1})</Button>
      <Button disabled>No (1)</Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button onClick={() => handleClick()}>Yes ({helpfulness})</Button>
      <Button onClick={() => handleClick()}>No (0)</Button>
    </React.Fragment>
  );
};

export default FeedbackButton;
