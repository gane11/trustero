const {environment} = require('./config');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const {ValidationError} = require('sequelize');
const path = require('path');

const indexRouter = require('./routes/index');
const listRoutes = require('./routes/api/lists');
const taskRoutes = require('./routes/api/tasks');
const commentRoutes = require('./routes/api/comments');

const app = express();
app.use(cors({origin:true}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/lists', listRoutes)
app.use("/api/tasks", taskRoutes);

app.use((req, res, next) => {
    const error = new Error('Resource could not be found.');
    error.errors = ['Resource could not be found.'];
    error.status = 404;
    res.render('404page');
});

app.use((error, req,res, next) => {
    if(error instanceof ValidationError) {
        error.errors = error.errors.map((err) => err.message);
        error.title = 'Sequelize Error';
    };
    next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: error.title || "Server Error",
    errors: error.errors,
    stack: isProduction ? null : error.stack,
  });
});

module.exports = app;