const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const socketConfig = require('../config/socket');
const statusRoutes = require('../routes/statusRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Setup middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve Socket.IO client library
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'node_modules/socket.io/client-dist/socket.io.js'));
});

// Setup routes
app.use(statusRoutes);

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Setup Socket.IO
socketConfig(io);

// Export the server for Vercel
module.exports = server;

// Start the server (for local development)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}