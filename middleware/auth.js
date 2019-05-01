const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Return 401 not authorized if there is no token
  if (!token) {
    return res.status(401).json({ msg: "Not Authorized" });
  } else {
    // Verify token
    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Invalid token" });
    }
  }
};
