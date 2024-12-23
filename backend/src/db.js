const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const dbURI = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST : process.env.MONGODB_URI;

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;