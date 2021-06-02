//Declaring required variables and routes
const express = require('express');
const app = express();
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

//Setting the view engine to pug
app.set('view engine', 'pug');

app.use('/static', express.static('public')); //Using a static route and the express.static method to serve the static files located in the public folder

app.use(mainRoutes);
app.use('/projects', projectRoutes);

//404 error handler
app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  console.log(`404: The page you're looking for doesn't exist.`) //Logs the status and message to the console.
  next(err);
});

//Global error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  if (err.status === 404) {
    res.render('page-not-found'); //Renders the Page Not Found template page.
  } else {
    res.status(err.status || 500);
    err.message = err.message || `Something went wrong on the server.`;
    console.log(`${err.status}: Something went wrong on the server.`) //Logs the status and message to the console.
    res.render('error'); //Renders the Error template page.
  }
});

//Sets the app to listen on port 3000
app.listen(3000, () => {
  console.log('This application is running on localhost:3000!')
});