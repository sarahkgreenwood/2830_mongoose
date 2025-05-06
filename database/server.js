// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./db"); // Use db.js
const Post = require("./models/post");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// CREATE
app.post("/create", async (req, res) => {
   try {
      const post = new Post(req.body);
      await post.save();
      res.send("Post saved.");
   } catch (err) {
      res.status(400).send(err.message);
   }
});

// READ ALL
app.get("/posts", async (req, res) => {
   const posts = await Post.find().sort({ uploadDate: -1 });
   res.json(posts);
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
      const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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

// SEED FUNCTION (optional)
async function seed() {
   await Post.deleteMany({});
   await Post.insertMany([
      { dishname: "Pasta", ingredients: 3, interests: ["cooking", "eating"] },
      { dishname: "Salad", ingredients: 2, interests: ["healthy", "light"] }
   ]);
   console.log("Seeded database.");
}

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
   // seed(); // uncomment this line if you want to seed on start
});
