const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Import JWT for token generation
const User = require("./models/user"); // Import the User model

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Store decoded user information in the request object
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

// Sign-up Route
app.post("/api/signup", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Error saving user:", err);  // Log error if user creation fails
    res.status(500).json({ message: "Error creating user" });
  }
});


// Login Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id }, // Payload (user data you want to encode)
      process.env.JWT_SECRET_KEY, // Secret key to sign the token
      { expiresIn: '1h' } // Set the token expiration time
    );

    // Return the token to the frontend
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Protected Route
app.get("/api/protected-route", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected data", user: req.user });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
