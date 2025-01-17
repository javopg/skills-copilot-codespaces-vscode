// create web server
var express = require('express');
var app = express();
// create http server
var http = require('http');
var server = http.createServer(app);
// create socket server
var io = require('socket.io').listen(server);
// create comments array
var comments = [];
// create web server
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
// create socket server
io.sockets.on('connection', function(socket){
    // send comments array to client
    socket.emit('load comments', comments);
    // receive a comment from client
    socket.on('send comment', function(data){
        // add a comment to comments array
        comments.push(data);
        // send the new comments array to all clients
        io.sockets.emit('load comments', comments);
    });
});
// start server
server.listen(3000);
console.log('Server running at http://localhost:3000/');
