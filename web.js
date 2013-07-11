var express = require('express');

var app = express.createServer(express.logger());
fs.readFileSync('./index.html');
//#var buffer = new Buffer(greeting)

app.get('/', function(request, response) {
  response.send(buffer.toString());
//  response.send("fuck you");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
