// dependencies
const express = require('express');
const cors = require('cors');

// basic server
const app = express();
app.use(cors());
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

// basic socket.io
const io = require('socket.io')(server, {
  cors: true,
  origins: '*',
});

io.on('connection', (socket) => {
  console.log('a user connected');
});
