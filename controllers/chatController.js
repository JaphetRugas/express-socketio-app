exports.handleMessage = (io, socket, msg) => {
  console.log("Message received:", msg); 
  io.emit("message", msg);
};

exports.handleDisconnect = (socket) => {
  console.log("User disconnected:", socket.id);
};
