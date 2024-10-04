const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketConfig = require('../config/socket');
const statusRoutes = require('../routes/statusRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { path: '/api/socket', addTrailingSlash: false });

// Store the io instance in the server's socket
server.io = io;

// Setup middlewares
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Setup routes
app.use(statusRoutes);

// Setup Socket.IO
socketConfig(io);

// Export the server for Vercel
module.exports = app;

// Start the server only when not in production
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000; // Use environment variable for the port
    server.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
