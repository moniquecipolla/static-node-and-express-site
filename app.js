const express = require('express');
const app = express();
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log('404 error')
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  if (err.status === 404) {
    res.render('page-not-found');
  } else {
    res.render('error');
  }
});

app.listen(3000, () => {
  console.log('This application is running on localhost:3000!')
});

module.exports = app;