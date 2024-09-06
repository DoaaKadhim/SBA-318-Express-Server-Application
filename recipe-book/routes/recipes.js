// const express = require('express');
// const router = express.Router();
// const validateRecipe = require('../middlewares/validateRecipe'); // Adjust the path as necessary

// let recipes = [
//   { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, eggs, pancetta, Parmesan cheese', instructions: 'Cook pasta, mix with eggs, pancetta, and cheese.' },
//   { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk, onion', instructions: 'Cook chicken, add curry powder and coconut milk, simmer.' }
// ];


// // //GET all recipes
// // router.get('/', (req, res) => {
// //   res.render('index', { recipes });
// // });

// // GET all recipes
// router.get('/', (req, res) => {
//   res.render('recipes', { recipes });
// });


// // GET a single recipe by ID
// router.get('/:id', (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   if (recipe) {
//     res.render('recipe', { recipe });
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // POST a new recipe
// router.post('/', validateRecipe, (req, res) => {
//   const newRecipe = {
//     id: recipes.length + 1,
//     name: req.body.name,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions
//   };
//   recipes.push(newRecipe);
//   res.redirect('/recipes');
// });

// // PATCH or PUT to update a recipe
// router.patch('/:id', validateRecipe, (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   if (recipe) {
//     recipe.name = req.body.name;
//     recipe.ingredients = req.body.ingredients;
//     recipe.instructions = req.body.instructions;
//     res.redirect('/recipes');
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // DELETE a recipe
// router.delete('/:id', (req, res) => {
//   recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
//   res.redirect('/recipes');
// });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const validateRecipe = require('../middlewares/validateRecipe');

// let recipes = [
//   { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, eggs, pancetta, Parmesan cheese', instructions: 'Cook pasta, mix with eggs, pancetta, and cheese.' },
//   { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk, onion', instructions: 'Cook chicken, add curry powder and coconut milk, simmer.' }
// ];

// // GET all recipes (and render the recipe.ejs page)
// router.get('/', (req, res) => {
//   res.render('recipe', { recipes, recipe: null });
// });

// // GET a single recipe by ID for editing
// router.get('/:id', (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   console.log('Recipe:', recipe); // Log the recipe to debug

//   if (recipe) {
//     res.render('recipe', { recipe });
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // POST a new recipe
// router.post('/', validateRecipe, (req, res) => {
//   const newRecipe = {
//     id: recipes.length + 1,
//     name: req.body.name,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions
//   };
//   recipes.push(newRecipe);
//   res.redirect('/recipes');
// });

// // PATCH or PUT to update a recipe
// router.patch('/:id', validateRecipe, (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   if (recipe) {
//     recipe.name = req.body.name;
//     recipe.ingredients = req.body.ingredients;
//     recipe.instructions = req.body.instructions;
//     res.redirect('/recipes');
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // DELETE a recipe
// router.delete('/:id', (req, res) => {
//   recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
//   res.redirect('/recipes');
// });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const validateRecipe = require('../middlewares/validateRecipe'); // Adjust the path as necessary

// // Define routes
// router.post('/', validateRecipe, (req, res) => {
//   // Handle recipe creation
//   res.send('Recipe created!');
// });

// module.exports = router;


// let recipes = [
//   { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, eggs, pancetta, Parmesan cheese', instructions: 'Cook pasta, mix with eggs, pancetta, and cheese.' },
//   { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk, onion', instructions: 'Cook chicken, add curry powder and coconut milk, simmer.' }
// ];

// // GET all recipes
// router.get('/', (req, res) => {
//   res.render('index', { recipes });
// });

// // GET a single recipe by ID
// router.get('/:id', (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   if (recipe) {
//     res.render('recipe', { recipe });
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // POST a new recipe
// router.post('/', validateRecipe, (req, res) => {
//   const newRecipe = {
//     id: recipes.length + 1,
//     name: req.body.name,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions
//   };
//   console.log('New Recipe:', newRecipe); // Debug log
//   recipes.push(newRecipe);
//   res.redirect('/recipes');
// });

// // PATCH or PUT to update a recipe
// router.patch('/:id', validateRecipe, (req, res) => {
//   const recipe = recipes.find(r => r.id === parseInt(req.params.id));
//   if (recipe) {
//     recipe.name = req.body.name;
//     recipe.ingredients = req.body.ingredients;
//     recipe.instructions = req.body.instructions;
//     res.redirect('/recipes');
//   } else {
//     res.status(404).render('error', { message: 'Recipe not found' });
//   }
// });

// // DELETE a recipe
// router.delete('/:id', (req, res) => {
//   recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
//   res.redirect('/recipes');
// });

// module.exports = router;
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

// Regular expression to match a 24-character hexadecimal string
const idPattern = /^[a-fA-F0-9]{24}$/;


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
    id: recipes.length > 0 ? recipes[0].id + 1 : 1, // Ensure new IDs are unique
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  };
  recipes.unshift(newRecipe); // Add new recipe to the beginning of the array
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
