const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Welcome add to my API');
});

app.listen(port);
