import swagger from './routes/swagger';
import * as process from "process";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const main = require('./routes/main');

const app = express();

//api
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const logout = require('./routes/logout');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/main', main);
app.use('/logout', logout);
app.use(swagger);

// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
  throw new createError.NotFound();
});
app.use(cookieParser());

// error handler
app.use(function(err: { message: any; status: any; }, req: { app: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; status: (arg0: any) => void; render: (arg0: string) => void; }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);

module.exports = app;
