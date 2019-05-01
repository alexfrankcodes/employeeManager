const mongoose = require("mongoose");

// Define User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: DataCue,
    default: Date.now
  }
});

module.exports = User = mongoose.model = ("user", UserSchema);
