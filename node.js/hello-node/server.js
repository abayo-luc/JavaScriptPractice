var http = require('http');
var port = 3000;
// this function handle user request and send out response
var requestHandler = function(request, response){
	console.log('New request: ' + request.url);
	response.end('Hello, world!');
}

// This line of code create a server for node
var server = http.createServer(requestHandler);

// this function help the serve to prind a message to the console
server.listen(port, function(){
	console.log('listening on port ' + port);
})