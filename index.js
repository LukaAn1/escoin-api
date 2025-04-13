const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const supply = JSON.parse(fs.readFileSync(path.join(__dirname, 'supply.json')));

app.get('/api/v1/supply', (req, res) => {
  res.send(String(supply.total));
});

app.get('/api/v1/circulation', (req, res) => {
  res.send(String(supply.circulating));
});

module.exports = app;