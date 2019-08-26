var express = require("express");
var router = express.Router();
const db = require("../db");
const bcrypt = "bcrypt";
con;

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
