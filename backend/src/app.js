require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const songRoutes = require('./routes/songRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware to debug incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  console.log('Request body:', req.body);
  next();
});

// Define routes
app.use('/api/songs', songRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}