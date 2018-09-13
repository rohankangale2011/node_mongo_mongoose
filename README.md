# Node Mongo Mongoose
A nodejs scalable architecture using mongo and mongoose with ES6

## Description
Nodejs been gaining popularity over few years due to its event-driven architecture and a nonblocking I/O API, that optimizes an application's throughput and scalability. 
Also, its provides a great support and compatibility with <strong>mongo</strong> as databse. Although this combinationation tends to work good for small application,
it sometimes becomes difficult to manage and scale the application, as the application need grows, due to its schema-less design. Specially for a developer whos coming from a SQL background.
With <strong>mongoose</strong>, one can create a schema based design for the server+database, that helps in various areas including <strong>middleware, plugins, population, validation.</strong>
Apart from all these libraries, this repo also consists of a sclabale architecture, where each module been segregated as per its behaviour, with each having its own purpose and functionality.

## Quickstart
Run the following commands after cloning the repo. Make sure you run the commands at the project root directory:
```
npm install
npm start
```

## Features
* [Node](https://nodejs.org/en/) - The javascript runtime environment
* [Mongo](https://www.mongodb.com/) - NoSql database
* [Mongoose](https://mongoosejs.com/) - An object document mapper(ODM)
* [Cluster](https://nodejs.org/api/cluster.html) - For improving the efficiency of nodejs server. You can have a look at <a href="https://github.com/rohankangale2011/node-clustering">cluster node</a>
 to have a quick insight on the same.
* [JWT](https://jwt.io/introduction/) - An authentication mechanism for passing the data/information between client and server securely.

