const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3004;

// Middleware setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Custom Middleware for Logging Requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Custom Middleware for Recipe Validation
function validateRecipe(req, res, next) {
  if (!req.body.name || !req.body.ingredients || !req.body.instructions) {
    return res.status(400).render('error', { message: 'Recipe must include name, ingredients, and instructions.' });
  }
  next();
}

// Routes
app.use('/recipes', require('./routes/recipes'));

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error-handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
