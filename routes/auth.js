var express = require("express");
var router = express.Router();

module.exports = router.use((req, res, next)=>{
    if(req.session.displayname){
      next();
    }else{
      res.redirect('/login')
  }  
  })