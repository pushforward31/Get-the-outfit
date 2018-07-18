import express from 'express';
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import http from 'http';
import path from 'path';
import api from './server/api';

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
import axios from "axios";
import cheerio from "cheerio";



var PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static(path.join(__dirname, 'dist')));

//app.use('/', api);

app.get('/', (req, res) => res.send ("Hello World"));

// app.get('*'), (req, res) => {
// 	res.sendFile(path.join(__dirname, 'dist/my-app/index.html'));
// }

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/week18populater", {
//   useMongoClient: true
// });



// Start the server
app.set('port', PORT);

var server = http.createServer(app);
server.listen(PORT, () =>  console.log("App running on port " + PORT + "!"));
// app.listen(PORT, function() {
//   console.log("App running on port " + PORT + "!");
// });

