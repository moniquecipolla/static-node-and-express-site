const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get( '/', ( req, res ) => {
  res.redirect( `/projects/0` )
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (id > projects.length - 1) {
    return res.redirect(`/projects`);
  }

  res.render('project', { id, projects: projects });
});

module.exports = router;