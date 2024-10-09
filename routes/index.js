var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  res.render('index', {title:'blood'});
  console.log('entered to  index file');
});

router.get('/register', function(req, res, next) {
  res.render('register');
  console.log('entered to registration');
});







module.exports = router;
  