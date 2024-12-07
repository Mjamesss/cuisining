// models/User.js
const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  usernames: { type: String, required: true, unique: true },
  passwords: { type: String, required: true },
});

// User model
const User = mongoose.model('User', userSchema);

module.exports = User;
