// routes/comments.js
const express = require('express');
const router = express.Router();

let comments = [
  { id: 1, recipeId: 1, userId: 1, text: 'Great recipe!' },
  { id: 2, recipeId: 2, userId: 2, text: 'I loved this!' }
];

// GET all comments
router.get('/', (req, res) => {
  res.render('comments', { comments });
});

// POST a new comment
router.post('/', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    recipeId: req.body.recipeId,
    userId: req.body.userId,
    text: req.body.text
  };
  comments.push(newComment);
  res.redirect('/comments');
});

// DELETE a comment
router.delete('/:id', (req, res) => {
  comments = comments.filter(c => c.id !== parseInt(req.params.id));
  res.redirect('/comments');
});

module.exports = router;
