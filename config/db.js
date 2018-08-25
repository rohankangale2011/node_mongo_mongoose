import mongoose from 'mongoose';
import {DB_URL} from './app-config';

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

// when successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to:' + DB_URL);
});

// when connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

// when connection is disconnected
mongoose.connection.on('disconnected', (err) => {
  console.log('Mongoose default connection disconnected:', err);
});

// close the Mongoose connection when node process ends
process.on('SIGINT', function() {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});