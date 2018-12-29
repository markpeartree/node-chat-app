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

  socket.on('disconnect', (socket) => {
    console.log('user disconnected')
  });

});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
