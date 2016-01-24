var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

// var login = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// app.get('/test', function(req, res){
//   res.send([{name:'test'}, {name: 'param2'}]);

// });
// app.get('/test/:id', function(req, res){
//   res.send({id:req.params.id, name:'hi'});
// })


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

// app.use('/login', login);
var router = require('./router')(app);
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});
module.exports = app;
