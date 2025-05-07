import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);