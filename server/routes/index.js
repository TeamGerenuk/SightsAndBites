var express = require("express");
var router = express.Router();

router.get("/message", function(req, res, next) {
  res.json("Sights & Bites");
});

module.exports = router;
