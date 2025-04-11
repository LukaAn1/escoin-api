const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Supply values — update if needed
const totalSupply = 219408422;
const circulatingSupply = 150591578;

// Total supply endpoint
app.get('/api/v1/supply/', (req, res) => {
  res.json({ total_supply: totalSupply });
});

// Circulating supply endpoint
app.get('/api/v1/circulation/', (req, res) => {
  res.json({ circulating_supply: circulatingSupply });
});

// Start server
app.listen(port, () => {
  console.log(`EscoinToken supply API running at http://localhost:${port}`);
});
