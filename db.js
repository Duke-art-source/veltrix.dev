require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const defaultLocalURI = 'mongodb://127.0.0.1:27017/veltriv';
  const mongoURI = process.env.MONGO_URI || defaultLocalURI;

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully using ${mongoURI}`);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

module.exports = connectDB;