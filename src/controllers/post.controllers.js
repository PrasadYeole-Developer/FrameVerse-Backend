const Post = require("../models/post.model");
const uploadFile = require("../services/storage.service");
require("dotenv").config();

const postsControllers = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "Image is required" });
  }
  const uploadedImage = uploadFile(req.file);
  try {
    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { postsControllers };
