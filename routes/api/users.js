const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");

// @route   POST api/users/register
// @desc    Register new user
// @access  Public
router.post(
  "/register",
  [
    // Make sure user enters name
    check("name", "Please enter your name")
      .not()
      .isEmpty(),

    // Make sure user enters valid email
    check("email", "Please enter a valid email").isEmail(),

    // Make sure user enters a valid password
    check(
      "password",
      "Please enter a pasword with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure some stuff out of req.body
    const { name, email, password } = req.body;

    console.log(req.body);

    try {
      // Check if user exists
      let user = await User.findOne({ email });

      if (user) {
        res
          .status(400)
          .json({ errors: [{ msg: "This email is already registered." }] });
      }

      // Get user's gravatar (if they have one)
      const avatar = gravatar.url(email, {
        // Size
        s: "200",
        // Rating
        r: "pg",
        // Default image
        d: "mm"
      });

      // Create new user based on given info
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Encrypt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Return jsonwebtoken

      res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
