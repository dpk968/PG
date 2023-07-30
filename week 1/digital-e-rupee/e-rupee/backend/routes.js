// routes.js
const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.post('/register', async (req, res) => {
  const { name, email, password,balance } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ name }, { email }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password, balance});
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
