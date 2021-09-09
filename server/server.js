const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static('client/dist'));

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening at http://localhost:${port}`);
  }
});