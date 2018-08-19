import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './route';
import './config/db';

import UserModel from './model';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/route', router);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
  next();
});

app.listen(3005, () => {
  console.log('Listening on port 3005');
});

export default app;