const path = require('path');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');
const http = require('http');

const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.broadcast.emit('newMessage',{from: "Admin", text: "New user connected", createdAt: new Date().getTime()});
  socket.emit('newMessage',{from: "Admin", text: "Welcom to the chat app", createdAt: new Date().getTime()});

  socket.on('disconnect', (socket) => {
    console.log('user disconnected')
    sendBack({from: "Admin", text: "User disconnected"})
  });

  socket.on('createMessage', (newMessage) => {
    console.log('newMessage:', newMessage)
    sendBack(newMessage);
  });

  var sendBack = (message) => {
    message.createdAt = new Date().getTime()
    socket.broadcast.emit('newMessage', message);
  };
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
