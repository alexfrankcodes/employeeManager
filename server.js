const express = require("express");

// Initialize app
const app = express();

app.get("/", (req, res) => res.send("Server is running"));

// Run on port 5000 locally, otherwise port indicate by environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
