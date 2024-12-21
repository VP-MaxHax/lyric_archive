const express = require('express');
const connectDB = require('./db');
const songRoutes = require('./routes/songRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));