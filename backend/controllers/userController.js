const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByUsername } = require("../models/userModel.js");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(username, email, hashedPassword, (err, result) => {
      if (err)
        return res.status(500).json({ message: "Error storing user data" });
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (err) {
    res.status(500).json({ message: "Error processing request" });
  }
};

// User login
const login = (req, res) => {
  const { username, password } = req.body;

  findUserByUsername(username, async (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login successful", username: user.username, token });
  });
};



module.exports = { signup, login };
