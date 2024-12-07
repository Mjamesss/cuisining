// addUser.js
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');

// MongoDB connection
mongoose.connect('mongodb://Cuisining/CuisiningAccounts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to create a new user
const createUser = async (username, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();
  console.log('User created:', username);
};

// Create a user (example)
createUser('testuser', 'securepassword');
