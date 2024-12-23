const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Load quotes from JSON file
const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, 'quotes.json')));

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Quotes API! Visit /api/quote to get a random quote.');
});

// API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

// Serve the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});