const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3002;


app.use(cors(
    {
        origin: 'http://localhost:5173',
    }
    
));

app.get('/nseData', async (req, res) => {
  try {
    const response = await axios.get('https://www.nseindia.com/api/live-analysis-variations?index=gainers');
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data from NSE India API:', error.message);
     res.status(error.response ? error.response.status : 500).json({ type: 'error', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
