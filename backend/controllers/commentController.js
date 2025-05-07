import Comment from '../models/Comment.js';

export const addComment = async (req, res) => {
  try {
    const { text, author, recipeId } = req.body;
    const comment = await Comment.create({ text, author, recipe: recipeId });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};