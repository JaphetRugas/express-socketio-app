const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketConfig = require('./config/socket');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Setup middlewares
app.use(express.json());
app.use(express.static('public')); // Serve static files (e.g., index.html)

// Setup routes
app.use(routes);

// Setup Socket.IO
socketConfig(io);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
