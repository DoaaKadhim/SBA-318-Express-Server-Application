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
