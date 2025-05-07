import express from 'express';
import multer from '../middleware/upload.js';
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipeController.js';

const router = express.Router();

router.post('/', multer.single('image'), createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;