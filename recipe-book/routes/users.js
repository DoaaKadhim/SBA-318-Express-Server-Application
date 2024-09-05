// routes/users.js
const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users
router.get('/', (req, res) => {
  res.render('users', { users });
});


// GET a single user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.render('user', { user });
    } else {
      res.status(404).render('error', { message: 'User not found' });
    }
  });

// POST a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.redirect('/users');
});

// PUT or PATCH - Update a user by ID
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      res.redirect('/users');
    } else {
      res.status(404).render('error', { message: 'User not found' });
    }
  });

// DELETE a user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.redirect('/users');
});


module.exports = router;
