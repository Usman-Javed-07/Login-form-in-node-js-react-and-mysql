// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "user_db",
// });

// module.exports = db;

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Database host
  user: process.env.DB_USER,       // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME    // Database name
});

module.exports = db;
