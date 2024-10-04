const chatController = require("../controllers/chatController");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Listen for incoming 'message' events from the client
    socket.on("message", (msg) => {
      // Handle the incoming message by delegating to the chatController
      chatController.handleMessage(io, socket, msg);
    });

    // Handle client disconnection event
    socket.on("disconnect", () => {
      // Notify the chatController that the client has disconnected
      chatController.handleDisconnect(socket);
    });
  });
};
