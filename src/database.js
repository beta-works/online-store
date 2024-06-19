const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://assvakhil:0s3fhWPZkanlxT1s@cluster-main.cnc9aek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-main';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with a non-zero status code
  }
};

module.exports = connectDB;

/*
In this file, we set up the connection to the MongoDB database. We import the mongoose library and use the mongoose.connect method to establish a connection to the MongoDB server. The connection string is read from the MONGODB_URI environment variable or defaults to mongodb://localhost:27017/online-store.

We also set up event listeners to log any connection errors and a successful connection message.
*/
