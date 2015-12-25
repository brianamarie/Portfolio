var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('dotenv').load();

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/pomodoro', function (req, res, next) {
  res.render('./pomodoro.jade', { title: 'Pomodoro Timer', message: 'Hello there!'});
  ga('send', 'pageview', location.pathname);
});

app.get('/quotegen', function (req, res, next) {
  res.render('./quotegen.jade', { title: 'Quote Generator', message: 'Hello there!'});
});

app.get('/weather', function (req, res, next) {
  res.render('./weather.jade', { title: "How's the Weather?" , message: 'Hello there!'});
});

app.get('/wikiview', function (req, res, next) {
  res.render('./wikiview.jade', { title: 'Wikipedia Interface', message: 'Hello there!'});
});

app.get('/twitch', function (req, res, next) {
  res.render('./twitch.jade', { title: 'Twitch Streamers', message: 'Hello there!'});
});

app.get('/calculator', function (req, res, next) {
  res.render('./calculator.jade', { title: 'JavaScript Calculator', message: 'Hello there!'});
});

app.get('/tictactoe', function (req, res, next) {
  res.render('./tictactoe.jade', { title: 'Tic-Tac-Toe', message: 'Hello there!'});
});

app.get('/about', function (req, res, next) {
  res.render('./about.jade', { title: 'about', message: 'Hello there!'});
});

app.get('/contact', function (req, res, next) {
  res.render('./contact.jade', { title: 'contact', message: 'Hello there!'});
});

app.get('/john', function (req, res, next) {
  res.render('./john.jade', { title: 'john', message: 'Hello there!'});
});

app.get('/campernews', function (req, res, next) {
  res.render('./campernews.jade', { title: 'Camper News', message: 'Hello there!'});
});

app.get('/simon', function(req, res, next) {
  res.render('./simon.jade', {title: 'Simon Game', message: 'Hello there!'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
};


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
