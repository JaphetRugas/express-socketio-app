const chatController = require('../controllers/chatController');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Custom events
    socket.on('message', (msg) => {
      chatController.handleMessage(io, socket, msg);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      chatController.handleDisconnect(socket);
    });
  });
};
