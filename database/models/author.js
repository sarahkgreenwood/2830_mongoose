// models/author.js
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Author", authorSchema);
