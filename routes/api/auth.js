const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

// @route   GET api/auth
// @desc    Get info about user from jwt
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth/login
// @desc    Authenticate user and log them in using jwt
// @access  Public
router.post(
  "/login",
  [
    // Make sure user enters their email
    check("email", "Please enter a valid email").isEmail(),

    // Make sure user enters their password
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure some stuff out of req.body
    const { email, password } = req.body;

    console.log(req.body);

    try {
      // Check if user exists
      let user = await User.findOne({ email });

      // If not, throw error
      if (!user) {
        res
          .status(400)
          .json({ errors: [{ msg: "Incorrect or Unregistered email" }] });
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        res.status(400).json({ errors: [{ msg: "Incorrect password" }] });
      }

      // Sign and return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
