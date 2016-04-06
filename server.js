var express = require('express');
var path = require('path');

var app = express();
var portDecision = process.env.PORT || 3000;

app.get('/', function(request, response){
  response.send(Date());
})



var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log('listening on port ', port);
})
