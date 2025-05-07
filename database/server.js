// server.js
const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post.js");
const mongoose = require("./db.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public")); // Serve files from /public directory

// CREATE
app.post("/create", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send("Post saved.");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// READ ALL
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ uploadDate: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send("Error retrieving posts.");
  }
});

// READ ONE
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send("Not found.");
  res.json(post);
});

// UPDATE
app.put("/posts/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).send("Not found.");
    res.json(updated);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// DELETE
app.delete("/posts/:id", async (req, res) => {
  const deleted = await Post.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send("Not found.");
  res.send("Post deleted.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
