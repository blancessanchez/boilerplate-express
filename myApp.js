var express = require('express');
var app = express();

// meet the node console
console.log('Hello World');

// serve static assets
app.use('/public', express.static(__dirname + '/public/'));

// serve an HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// serve JSON on a specific route
// app.get('/json', (req, res) => {
//   res.json({
//     message: "Hello json"
//   })
// });

// use .env file
// app.get('/json', (req, res) => {
//   process.env.MESSAGE_STYLE === 'uppercase' ? 
//     res.json({ "message": "HELLO JSON" }):
//     res.json({ "message": "Hello json" })
// });

// root-level request logger middleware
// app.use(function(req, res, next) {
//   console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//   next();
// });































 module.exports = app;
