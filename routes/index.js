//Sets the required variables
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//Sets the main Index and About routes
router.get('/', (req, res) => {
  res.render('index', { projects: projects });
});

router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;