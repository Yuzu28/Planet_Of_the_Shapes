var express = require('express');
var router = express.Router();
var http = require('../bin/www');
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat', function(req, res, next) {
  res.render('chat');
});
io.on('connection', function(socket){
  console.log('a user connected');
});
module.exports = router;
