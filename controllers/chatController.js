// Handle incoming message from a client
exports.handleMessage = (io, socket, msg) => { 
  console.log("Message received:", msg);
  // Broadcast the message to all connected clients
  io.emit("message", msg);
};

// Handle client disconnection event
exports.handleDisconnect = (socket) => { 
  console.log("User disconnected:", socket.id);
};
