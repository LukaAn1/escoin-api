const express = require('express');
const app = express();

// Escoin Token values
const totalSupply = 219408422;
const circulatingSupply = 150591578;

app.get('/api/v1/supply', (req, res) => {
  res.send(String(totalSupply));
});

app.get('/api/v1/circulation', (req, res) => {
  res.send(String(circulatingSupply));
});

module.exports = app;