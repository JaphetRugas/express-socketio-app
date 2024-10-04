const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketConfig = require('../config/socket');
const statusRoutes = require('../routes/statusRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Setup middlewares
app.use(express.json());
app.use(express.static('public')); // Serve static files (if any)

// Setup routes
app.use(statusRoutes);

// Setup Socket.IO
socketConfig(io);

// Export the server for Vercel
module.exports = app;

// Start the server (Vercel will handle this)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});