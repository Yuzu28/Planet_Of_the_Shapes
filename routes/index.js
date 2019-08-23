var express = require('express');
var router = express.Router();
var UserIp;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat', async function(req, res, next){
  UserIp = await req.connection.remoteAddress
  var data = await req
  console.log(data)
  console.log(`A User has Joined at: ${UserIp}`)
  res.render('chat');
});
module.exports = {router,UserIp};
