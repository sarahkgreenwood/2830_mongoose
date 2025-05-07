import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './db.js';
import recipeRoutes from './routes/recipeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads")); // Serve image files

app.use("/recipes", recipeRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});