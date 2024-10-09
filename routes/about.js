var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { value: 'blood danation about site' });
});

module.exports = router;
  