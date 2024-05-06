// Import required modules
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
