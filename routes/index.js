var express = require('express');
var router = express.Router();
const db = require("../db");
const bcrypt = require('bcrypt');
const expressSession = require('express-session');
var UserIp;
var displayName = "hi";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/game', async function(req, res, next){
  UserIp = await req.connection.remoteAddress
  var data = await req
  console.log(data)
  console.log(`A User has Joined at: ${UserIp}`)
  res.render('multiplayer');
});

router.get('/menu', async function(req, res, next){
  var data = await req
  // console.log(data)
  // // var name = awa
  // req.session.displayname = displayName; 
  res.render('menu', {name:displayName});
});

router.post('/register',(req, res, next)=>{

  // const {displayname,password,password2} = req.body;
  const displayname = req.body.displayname;
  const password = req.body.password;
  const password2 = req.body.password2;

  const checkUserExistsQuery = `
    SELECT * FROM USERS WHERE DISPLAYNAME = $1 
    
  `;
  db.any(checkUserExistsQuery, [displayname]).then((results) => {
    if(results.length > 0){
      // this user alreacy exists
      res.redirect('/login?msg=userexists'); 
    }else{
      // new user.insert
      insertUser();
    }
  })
function insertUser(){
  const insertUserQuery = `INSERT INTO users (displayname,password)
    VALUES
    ($1,$2)
    returning id`
    const hash = bcrypt.hashSync(password,10);
  db.one(insertUserQuery,[displayname,hash]).then((resp)=>{
    res.json({
      msg: resp
    })
  })
}

// router.post(`/login`, (req, res, next) =>{
//   res.json(req.body);
//   const checkUserQuery = `
//   SELECT * From users WHERE display
//   name=$1
//   `;
//   const checkUser = db.one(checkUserQuery,[req.body.displayname])
//   const correctPass = bcrypt.compareSync(req.body.pasword, results.password);
//   if(correctPass){
//     // this is a valid user/pass 
//     res.send("Logged In");
//     displayName = results.displayname;
//     console.log(results.displayname)
//     console.log('hello')
//     req.session.displayname = results.displayname;
//     req.session.loggedIn = true;
//     res.redirect('/menu');
    
//   }else{
//     // these arent the droids were looking for
//     res.redirect('/login?msg=badPass')
//   }
//   // res.json(results);
  
//   })
//   checkUser.catch((error) => {
//     res.json({
//       msg: "userDoesNotExist"
//     })
  
// });
router.post('/loginProcess', async (req, res, next) => {
  // res.json(req.body);
  console.log('hi');
  const checkUserQuery = `
  SELECT * From users WHERE displayname=$1
  `;
  const checkUser = await db.one(checkUserQuery,[req.body.displayname])
  const correctPass = bcrypt.compareSync(req.body.pasword, results.password);
  console.log(checkUser)
  if(correctPass){
    // this is a valid user/pass 
    res.send("Logged In")
    console.log('user logged')
    req.session.displayname = results.displayname;
    req.session.loggedIn = true;
    req.session.email = results.email;
    res.redirect('/menu');
    
  }else{
    // these arent the droids were looking for
    console.log('didnt work')
    res.redirect('/login?')
  }
  res.json(results);
  
  })
  checkUser.catch((error) => {
    res.json({
      msg: "userDoesNotExist"
    })
  })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
})
module.exports = {router,UserIp};
