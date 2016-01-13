var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/test', function(req, res){
  res.send([{name:'test'}, {name: 'param2'}]);

});
app.get('/test/:id', function(req, res){
  res.send({id:req.params.id, name:'hi'});
})

// app.use(express.static(path.join(__dirname, 'public')));

 // app.use('/', routes);
 // app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

if(app.get('env') === 'development'){
  console.log("~~~~~~~~~~~~~~~~ IN DEVELOPEMENT MODE ~~~~~~~~~~~~~");
  app.use(express.static(path.join(__dirname, '../client')));
  app.use(express.static(path.join(__dirname, '../client/app')));
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
if(app.get('env') === 'production'){
  console.log("~~~~~~~~~~~~~~~~ IN PODUCTION MODE ~~~~~~~~~~~~~");
  app.use(express.static(path.join(__dirname, '/dist')));

  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}
module.exports = app;
