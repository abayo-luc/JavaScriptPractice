// the two line below is the first step in using express with node.js
var express = require('express');
var app = express();
// defining the port to be use
var port = 3000;

// defining the routes according to the user request
app.get('/', function(request, response){
	response.send('Hello, world!');
});

// telling the app to listen to the port
app.listen(port, function(){
	console.log('Express app listening on port ' + port);
});
