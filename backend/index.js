const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const db = require("./config/db");

const app = express();
// const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test database connection
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  const env = process.env.NODE_ENV || "development"; 
  console.log(`Server running in ${env} mode on http://localhost:${PORT}`);
});
