var express = require('express');
var app = express();
var port = process.env.PORT
  ? process.env.PORT
  : 1351;

app.use(express.static('./'));
app.all('/*', function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendfile('ceb1.html', {root: __dirname + './'});

});

app.listen(port); //the port you want to use
console.log('App started at port :' + port);