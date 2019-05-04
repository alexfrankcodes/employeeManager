const express = require("express");
const connectMongoDB = require("./config/db");
const path = require("path");

// Initialize app
const app = express();

// Connect to the MongoDB database
connectMongoDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Check if in production - if so, serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Run on port 5000 locally, otherwise port indicate by environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
