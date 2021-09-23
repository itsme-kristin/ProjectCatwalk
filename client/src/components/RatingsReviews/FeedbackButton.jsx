import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const FeedbackButton = ({ helpfulness, id }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [yesClick, setYesClick] = useState(false);
  const [noClick, setNoClick] = useState(false);

  useEffect(() => {
    setIsDisabled(false);
  }, [id]);

  const handleYesClick = () => {
    axios
      .put(`/api/reviews/${id}/helpful`)
      .catch(() => {
        console.log('error updating helpfulness');
      })
      .then(() => {
        setYesClick(true);
        setIsDisabled(true);
      });
  };

  const handleNoClick = () => {
    setNoClick(true);
    setIsDisabled(true);
  };

  if (isDisabled && yesClick) {
    return (
      <React.Fragment>
        <Button disabled>Yes ({helpfulness + 1})</Button>
        <Button disabled>No (0)</Button>
      </React.Fragment>
    );
  } else if (isDisabled && noClick) {
    return (
      <React.Fragment>
        <Button disabled>Yes ({helpfulness})</Button>
        <Button disabled>No (1)</Button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Button onClick={() => handleYesClick()}>Yes ({helpfulness})</Button>
        <Button onClick={() => handleNoClick()}>No (0)</Button>
      </React.Fragment>
    );
  }
};

export default FeedbackButton;
