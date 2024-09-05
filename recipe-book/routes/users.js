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

// DELETE a user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.redirect('/users');
});

module.exports = router;
