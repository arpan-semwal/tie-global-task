// backend (Node.js/Express)
const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Import the cors module

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your React app's actual domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
    // Use cors middleware to enable Cross-Origin Resource Sharing

app.get('/', (req, res) => {
    res.send("<h1>hello server</h1>");
});

app.get('/niftyData', async (req, res) => {
    try {
        const GAINERS_URL = "https://www.nseindia.com/api/live-analysis-variations?index=gainers";
        const response = await axios.get(GAINERS_URL);
        console.log("Response from NSE India API:", response.data.NIFTY.data);
        res.json(response.data.NIFTY.data);
    } catch (error) {
        console.error("Error fetching data from NSE India API:", error.message);
        res.status(500).json({ type: 'error', message: error.message });
    }
});

const port = process.env.PORT || 3001; // Use a different port for your backend
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
