import cluster from 'cluster';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import UserModel from './model';
import authRouter from './route/auth';
import userRouter from './route/user';
import './config/db';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
  next();
});

const common = () => {
  app.listen(3005, function() {
    console.log("Listening on port 3005");
  });
}

const clusteredNode = () => {
  if (cluster.isMaster) {
    // counts the total number of available cpu's
    var cpuTotalCount = require("os").cpus().length,
      i = 0;

    // creating a worker of each of the available cpu
    for (i; i < cpuTotalCount; i++) {
      cluster.fork();
    }
  } else {
    common();
  }
}

clusteredNode();

export default app;