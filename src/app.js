const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://frameverse-eta.vercel.app",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("FrameVerse Backend is running");
});
app.use("/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
