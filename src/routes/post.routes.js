const express = require("express");
const {
  postsController,
  getPostsController,
} = require("../controllers/post.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.single("image"), postsController);
router.get("/", authMiddleware, getPostsController);

module.exports = router;
