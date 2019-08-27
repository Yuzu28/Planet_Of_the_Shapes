var express = require("express");
var router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");
var UserIp;
var displayName; // should get rid of this soon

const Auth = require("./auth");

const sessionOptions = {
  secret: "i3rlejofdiaug;lsad",
  resave: false,
  saveUninitialized: false
};

router.use(expressSession(sessionOptions));
/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/login");
});
router.get("/register", function(req, res, next) {
  res.render("register", { title: "Express" });
});
router.get("/login", function(req, res, next) {
  res.render("login", { title: "Express" });
});
router.get("/single", Auth ,function(req,res,next){
 console.log(`
 
 
 
 
 
 
 `)
  const playerName =req.session.displayname
 console.log(playerName)
  res.render('singlePlayerGame',
  {playerName,
   HighScore: req.session.HighScore 
  })
})
router.post('/sethighscore', async (req, res, next)=>{
  console.log(req.body)
  const setScore = `
  UPDATE users
  SET    highscore = $1
  WHERE  displayname = $2
  returning true;
  `
  var score = await db.one(setScore,[req.body.highscore,req.body.displayName])
  console.log(req.body.highscore)
})
router.post('/loginProcess', async (req, res, next) => {
  console.log('hi');
  const checkUserQuery = `
  SELECT * From users WHERE displayname=$1
    `;
    const checkUser = await db.one(checkUserQuery,[req.body.displayname])
    console.log(checkUser.password)
    const correctPass = bcrypt.compareSync(req.body.password, checkUser.password);
    if(correctPass){
      // this is a valid user/pass 
      console.log('user logged')
      req.session.displayname = checkUser.displayname;
      req.session.HighScore = checkUser.highscore
      req.session.loggedIn = true;
      req.session.email = checkUser.email;
      res.redirect('/menu');
      
    }else{
      // these arent the droids were looking for
      console.log('didnt work')
      res.redirect('/login?badpass')
    }
    // res.json(results);
    
    
    checkUser.catch((error) => {
      res.json({
        msg: "userDoesNotExist"
      })
    })
})

router.get("/game", async function(req, res, next) {
  UserIp = await req.connection.remoteAddress;
  var data = await req;
  console.log(data);
  console.log(`A User has Joined at: ${UserIp}`);
  res.render("multiplayer", {
    user: displayName
  });
});

// router.use((req,res,next)=>{
//   console.log(req.session.displayname)
//   if(req.session.displayname){
//     next();
//   }else{
//     res.redirect('/login')
//   }
// })
router.get("/menu", Auth, async function(req, res, next) {
  var data = await req;
  console.log(data);
  // // var name = awa
  // req.session.displayname = displayName;
  console.log(req.session);
  res.render("menu", { name: req.session.displayname });
});

router.post("/registerProcess", (req, res, next) => {
  // const {displayname,password,password2} = req.body;
  const displayname = req.body.displayname;
  const password = req.body.password;
  const password2 = req.body.password2;

  const checkUserExistsQuery = `
    SELECT * FROM USERS WHERE DISPLAYNAME = $1 
  `;
  db.any(checkUserExistsQuery, [displayname]).then(results => {
    if (results.length > 0) {
      // this user already exists
      res.redirect("/login?msg=userexists");
    } else {
      // new user.insert
      insertUser();
      res.redirect("/login?user_created");
    }
  });
  function insertUser() {
    const insertUserQuery = `
    INSERT INTO users (displayname,password, highscore)
    VALUES
    ($1,$2,0)
    returning id`;
    const hash = bcrypt.hashSync(password, 10);
    db.one(insertUserQuery, [displayname, hash]).then(resp => {
      res.redirect("/menu");
    });
  }
});

router.post("/loginProcess", async (req, res, next) => {
  console.log("hi");
  const checkUserQuery = `
  SELECT * From users WHERE displayname=$1
    `;
  const checkUser = await db.one(checkUserQuery, [req.body.displayname]);
  console.log(checkUser.password);
  const correctPass = bcrypt.compareSync(req.body.password, checkUser.password);
  if (correctPass) {
    // this is a valid user/pass
    console.log("user logged");
    req.session.displayname = checkUser.displayname;
    req.session.loggedIn = true;
    req.session.email = checkUser.email;
    res.redirect("/menu");
  } else {
    // these arent the droids were looking for
    console.log("didnt work");
    res.redirect("/login?badpass");
  }
  // res.json(results);

  checkUser.catch(error => {
    res.json({
      msg: "userDoesNotExist"
    });
  });
});
router.get("/leaderboard", async function(req, res) {
  const userInfo = `
  SELECT displayname, highscore
  From users 
  order by highscore desc 
  limit 10
  `;

  const results = await db.any(userInfo);

  //console.log(results);
  res.render("Leaderboard", { results });
});
module.exports = { router, UserIp };
