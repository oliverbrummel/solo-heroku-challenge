var express = require('express');

var app = express();
var portDecision = process.env.PORT || 3000;

app.get('/', function(request, response){
  response.send('Hello this is what my voice sounds like.. oh wait no it isn\'t');
})



var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log('listening on port ', port);
})
