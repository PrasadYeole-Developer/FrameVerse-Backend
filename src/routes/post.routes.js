const express = require("express");
const { postsControllers } = require("../controllers/post.controllers");
const router = express.Router();

router.post("/", postsControllers);

module.exports = router;
