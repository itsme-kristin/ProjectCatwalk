import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const FeedbackButton = ({ helpfulness, id }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [no, setNo] = useState(0);
  const [yes, setYes] = useState(helpfulness);

  const handleYesClick = () => {
    axios
      .put(`/api/reviews/${id}/helpful`)
      .catch(() => {
        console.log('error updating helpfulness');
      })
      .then(() => {
        setYes(yes + 1);
        setIsDisabled(true);
      });
  };

  const handleNoClick = () => {
    setNo(1);
    setIsDisabled(true);
  };

  return isDisabled ? (
    <React.Fragment>
      <Button disabled>Yes ({yes})</Button>
      <Button disabled>No ({no})</Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button onClick={() => handleYesClick()}>Yes ({yes})</Button>
      <Button onClick={() => handleNoClick()}>No ({no})</Button>
    </React.Fragment>
  );
};

export default FeedbackButton;
