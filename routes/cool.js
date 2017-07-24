var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/',function(req,res,next){
  res.end("You are so cool");
})

module.exports = router;
