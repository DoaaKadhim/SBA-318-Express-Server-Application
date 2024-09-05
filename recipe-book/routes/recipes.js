const express = require('express');
const router = express.Router();
const validateRecipe = require('../middlewares/validateRecipe'); // Adjust the path as necessary

let recipes = [
  { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, eggs, pancetta, Parmesan cheese', instructions: 'Cook pasta, mix with eggs, pancetta, and cheese.' },
  { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk, onion', instructions: 'Cook chicken, add curry powder and coconut milk, simmer.' }
];

// GET all recipes
router.get('/', (req, res) => {
  res.render('index', { recipes });
});

// GET a single recipe by ID
router.get('/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.render('recipe', { recipe });
  } else {
    res.status(404).render('error', { message: 'Recipe not found' });
  }
});

// POST a new recipe
router.post('/', validateRecipe, (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  };
  recipes.push(newRecipe);
  res.redirect('/recipes');
});

// PATCH or PUT to update a recipe
router.patch('/:id', validateRecipe, (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    recipe.name = req.body.name;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;
    res.redirect('/recipes');
  } else {
    res.status(404).render('error', { message: 'Recipe not found' });
  }
});

// DELETE a recipe
router.delete('/:id', (req, res) => {
  recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
  res.redirect('/recipes');
});

module.exports = router;
