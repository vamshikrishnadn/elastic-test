const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("it's working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

module.children = app;
