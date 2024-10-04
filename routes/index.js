const express = require('express');
const router = express.Router();

// Example of a REST API endpoint
router.get('/api/status', (req, res) => {
  res.send({ status: 'Server is running' });
});

module.exports = router;
