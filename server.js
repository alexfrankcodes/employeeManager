const express = require("express");
const connectMongoDB = require("./config/db");

// Initialize app
const app = express();

// Connect to the MongoDB database
connectMongoDB();

// Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Server is running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Run on port 5000 locally, otherwise port indicate by environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
