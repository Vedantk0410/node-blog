const express = require("express");
const router = express.Router(); // Create a router instance

// Define a route within the articles router
router.get("/", (req, res) => {
  res.send("in articles");
});

module.exports = router; // Export the router
