
// module.exports = router;
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

// GET a single comment by ID
router.get('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (comment) {
      res.render('comment', { comment });
    } else {
      res.status(404).render('error', { message: 'Comment not found' });
    }
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

// PUT (Update) a comment
router.put('/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (comment) {
    comment.recipeId = req.body.recipeId;
    comment.userId = req.body.userId;
    comment.text = req.body.text;
    res.redirect('/comments');
  } else {
    res.status(404).render('error', { message: 'Comment not found' });
  }
});

// DELETE a comment
router.delete('/:id', (req, res) => {
  comments = comments.filter(c => c.id !== parseInt(req.params.id));
  res.redirect('/comments');
});

module.exports = router;
