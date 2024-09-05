const validateRecipe = (req, res, next) => {
    // Add your validation logic here
    if (!req.body.name) {
      return res.status(400).send('Recipe name is required');
    }
    // Add more validation as needed
    next();
  };
  
  module.exports = validateRecipe;
  