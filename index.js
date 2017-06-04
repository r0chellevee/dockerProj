// var http = require('http')

// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
//   res.end("Weeeee\n")

// }).listen(8000)

// console.log('Server is running')

'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);