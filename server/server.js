const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  console.log('New user connected');
});

io.on('disconnect', () => {
  console.log('User disconnected');
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
