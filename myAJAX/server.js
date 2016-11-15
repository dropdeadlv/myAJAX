var http = require('http');

var static = require('node-static');

var file = new static.Server('.');

var server = http.createServer(function(req,res){
	file.serve(req,res)
});

server.listen('8080');
console.log('server is running!');