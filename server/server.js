const path = require('path');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message')

const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.broadcast.emit('newMessage', generateMessage("Admin", "New user connected"));
  socket.emit('newMessage', generateMessage("Admin", "Welcom to the chat app"));

  socket.on('disconnect', (socket) => {
    console.log('user disconnected')
    sendBack({from: "Admin", text: "User disconnected"})
  });

  socket.on('createMessage', (newMessage) => {
    console.log('newMessage:', newMessage)
    sendBack(newMessage);
  });

  var sendBack = (message) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
  };
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
