// models/post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
   dishname: {
      type: String,
      required: true,
      minlength: 3
   },
   ingredients: {
      type: Number,
      required: true,
      min: 0,
      max: 4
   },
   uploadDate: {
      type: Date,
      default: Date.now
   },
   interests: {
      type: [String],
      default: []
   },
   author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }  
});

module.exports = mongoose.model("Post", postSchema);
