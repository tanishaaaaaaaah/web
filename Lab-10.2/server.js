var express = require('express');
var http = require('http');
var socketIO = require('socket.io');
var moment = require('moment');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});

var connectedUsers = {};

io.on('connection', function (socket) {
    console.log('A user connected');

    // Ask the new user for their username
    socket.emit('username request');

    socket.on('username', function (username) {
        console.log(username + ' joined the chat');
        connectedUsers[socket.id] = username;
        socket.broadcast.emit('new user', username);
    });

    socket.on('new message', function (message) {
        var username = connectedUsers[socket.id];
        var text = message;
        var time = moment().format('h:mm a');
        var msg = {
            username: username,
            text: text,
            time: time
        };
        console.log(connectedUsers[socket.id] + ': ' + message);
        io.emit('new message', msg);
    });

    socket.on('disconnect', function () {
        console.log(connectedUsers[socket.id] + ' left the chat');
        socket.broadcast.emit('user left', connectedUsers[socket.id]);
        delete connectedUsers[socket.id];
    });
});

server.listen(3000, function () {
    console.log('Chat application started on port 3000');
});