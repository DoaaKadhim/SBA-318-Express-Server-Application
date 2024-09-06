//To see all recipes: http://localhost:3002/recipes
//To see all users: http://localhost:3002/users
//To see all comments: http://localhost:3002/comments

// const express = require('express');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const app = express();
// const port = 3005;

// const recipesRouter = require('./routes/recipes');
// const usersRouter = require('./routes/users');
// const commentsRouter = require('./routes/comments');

// // Middleware setup
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));  // For serving static files
// app.use(methodOverride('_method')); // For supporting PUT and DELETE methods in forms
// app.set('view engine', 'ejs');
// app.set('views', './views'); // Optional if views are in the default folder 'views'


// // Custom Middleware for Logging Requests
// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// });

// // Custom Middleware for Recipe Validation (can also be moved to recipes router)
// function validateRecipe(req, res, next) {
//   if (!req.body.name || !req.body.ingredients || !req.body.instructions) {
//     return res.status(400).render('error', { message: 'Recipe must include name, ingredients, and instructions.' });
//   }
//   next();
// }

// // Routes
// app.use('/recipes', recipesRouter);   // Recipes routes
// app.use('/users', usersRouter);       // Users routes
// app.use('/comments', commentsRouter); // Comments routes

// // Sample Route (Home page)
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Error-handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).render('error', { message: 'Something went wrong!' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3005;

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const validateRecipe = (req, res, next) => {
  // Optional: Log request body for debugging
  console.log('Validating Recipe:', req.body);
  next(); // Proceed without validation for debugging
};

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
