const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const postsControllers = async (req, res) => {
  const token = req.cookie.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, please login first",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded.id,
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token, please login again",
    });
  }
};

module.exports = { postsControllers };
