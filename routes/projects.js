//Declares required variables
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//Redirects the /projects route to the first project
router.get( '/', ( req, res ) => {
  res.redirect( '/projects/0' )
});

//Sets the projects/:id route
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  if (projects[id]) {
    res.render('project', { id, projects: projects });
  } else {
    const err = new Error('Not Found'); //creates a new 404 error if a non-existent project id is entered
    err.status = 404;
    err.message = `The page you're looking for doesn't exist.`;
    console.log(`404: The page you're looking for doesn't exist.`)
    next(err);
  }
  
});

module.exports = router;