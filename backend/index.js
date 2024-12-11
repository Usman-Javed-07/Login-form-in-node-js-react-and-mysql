
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Sync database models
sequelize.sync({ alter: false }).then(() => console.log("Database synced"));



// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const env = process.env.NODE_ENV || "development";
  console.log(`Server running in ${env} mode on http://localhost:${PORT}`);
}); 