const db = require("../config/db");

const createUser = (username, email, hashedPassword, callback) => {
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, hashedPassword], callback);
};

const findUserByUsername = (username, callback) => {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], callback);
};

module.exports = { createUser, findUserByUsername };
