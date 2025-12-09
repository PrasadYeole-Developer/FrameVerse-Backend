const Post = require("../models/post.model");
const generateCaption = require("../services/ai.service");
const uploadFile = require("../services/storage.service");
require("dotenv").config();

const postsController = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "Image is required" });
  }
  const uploadedImage = await uploadFile(req.file);
  const caption = await generateCaption(req.file);
  try {
    const post = await Post.create({
      image: uploadedImage.url,
      caption: caption,
      user: req.user._id,
    });
    return res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getPostsController = async (req, res) => {
  try {
    const posts = await Post.find({
      user: req.user._id,
    }).populate("user", "_id username");
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user" });
    }
    return res.status(200).json({
      message: "Posts fetched successfully",
      posts: posts,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
};

module.exports = { postsController, getPostsController };
