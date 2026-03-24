// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors({
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use(express.json())

const apiUrl = 'https://api.hgbrasil.com/weather?key=ba94c742&city_name=Recife,PE';  // Your weather API URL

// Endpoint to proxy the weather API request
app.get('/weather', async (req, res) => {
  console.log('Received request');
  try {
    const response = await axios.get(apiUrl);
    console.log('Weather data fetched successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);  // Log error details
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});
// app.get('/weather', async (req, res) => {
//   try {
//     // Make a request to the weather API
//     const response = axios.get(apiUrl);
//     // Send the API response to the client (your frontend)
//     res.json(response.data);
//   } catch (error) {
//     // Send error response if something goes wrong
//     res.status(500).json({ error: 'Error fetching weather data' });
//   }
// });

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});