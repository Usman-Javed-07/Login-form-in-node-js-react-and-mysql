const express = require("express");
const { signup, login } = require("../controllers/userController.js");
const User = require ('../models/userModel.js')
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/", async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.findAll(); 
  
      // Send the data as a response
      res.json(users);
    } catch (err) {
      console.error("Error fetching users: ", err);
      res.status(500).json({ error: "Unable to fetch users" });
    }
  });
module.exports = router;
