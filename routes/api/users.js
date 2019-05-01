const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post(
  "/",
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
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send("User route");
  }
);
module.exports = router;
