var express = require('express');
var router = express.Router();
const db = require("../db");
const bcrypt = require('bcrypt');
const expressSession = require('express-session');





router.post('/registerProcess',(req, res, next)=>{

  // const {username,email,password,password2} = req.body;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  const checkUserExistsQuery = `
    SELECT * FROM USERS WHERE DISPLAYNAME = $1 OR email = $2
    
  `
  db.any(checkUserExistsQuery, [username, email]).then((results) => {
    if(results.length > 0){
      // this user alreacy exists
      res.redirect('/login?msg=userexists'); 
    }else{
      // new user.insert
      insertUser();
    }
  })
function insertUser(){
  const insertUserQuery = `INSERT INTO users (displayname,email,password)
    VALUES
    ($1,$2,$3)
    returning id`
    const hash = bcrypt.hashSync(password,10);
  db.one(insertUserQuery,[username,email,hash]).then((resp)=>{
    res.json({
      msg: resp
    })
  })
}

router.post(`/loginProcess`, (req, res, next) =>{
  res.json(req.body);
  const checkUserQuery = `
  SELECT * From users WHERE display
  name=$1
  `;
  const checkUser = db.one(checkUserQuery,[req.body.username])
  const correctPass = bcrypt.compareSync(req.body.pasword, results.password);
  if(correctPass){
    // this is a valid user/pass 
    res.send("Logged In")
    req.session.username = results.username;
    req.session.loggedIn = true;
    req.session.email = results.email;
    res.redirect('/');
    
  }else{
    // these arent the droids were looking for
    res.redirect('/login?msg=badPass')
  }
  res.json(results);
  
  })
  checkUser.catch((error) => {
    res.json({
      msg: "userDoesNotExist"
    })
  
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
})
module.exports = router;
