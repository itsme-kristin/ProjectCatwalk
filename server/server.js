const express = require('express');
const AUTH = require('../config.js');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static('client/dist'));

const port = 3000;

// app.all call for -everything-
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/*
// request /review /api/review
app.all('/api/*', (req, res) => {
  console.log(`recieving a ${req.method} request for ${req.url.slice(4)}`);

  config = {
    method: req.method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx${req.url.slice(4)}`,
    headers: {
      Authorization: AUTH.TOKEN
    }
  }

  if (req.body) {
    console.log(req.body);
    config['data'] = req.body;
  }

  // SAMPLE BODY DATA:
  // {
  //   "product_id": 38322,
  //   "rating": 5,
  //   "summary": "This is a Test Review",
  //   "body": "The testiest of reviews.",
  //   "recommend": true,
  //   "name": "testuser",
  //   "email": "test@user.com",
  //   "photos": [],
  //   "characteristics": {}
  // }

  axios(config)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('Error occurred making the request');
    res.send(err);
  })
});


app.listen(port, (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening at http://localhost:${port}`);
  }
});