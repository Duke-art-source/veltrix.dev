require('dotenv').config(); // Loads your .env file
const express = require('express');
const connectDB = require('./db'); // This is your existing database file
const app = express();

// 1. Connect to the database
connectDB();

// 2. Middleware to understand JSON data from your form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. This is the "Bridge" that receives your form data
app.post('/api/contact', (req, res) => {
    console.log("Form data received:", req.body);
    
    // For now, we just send a success message back to your script.js
    res.status(200).json({ message: "Data received successfully!" });
});

// 4. Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));