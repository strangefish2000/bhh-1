//* INDEX-ROUTER > index.js

var express = require("express");
var router = express.Router();

// bhhController = require("./controllers/bhh.controller"),
// mainController = require("./controllers/main.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET All properties */
router.get("/properties", function (req, res, next) {
  res.render("all_properties");
});




router.get("/b", function (req, res) {
  res.send("BHHHH HOME PAGE");
});

module.exports = router;
