const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  bio: {
    type: String,
    default: ""
  },
  joinDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Author", authorSchema);
