const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get( '/', ( req, res ) => {
  res.redirect( '/projects/0' )
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  
  //res.render('project', { id, projects: projects })

  if (projects[id]) {
    res.render('project', { id, projects: projects });
  } else {
    const err = new Error('Not Found');
    err.status = 404;
    err.message = `The page you're looking for doesn't exist.`;
    next(err);
  }
  
});

module.exports = router;