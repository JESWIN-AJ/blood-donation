var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {

    res.render('seacher', { value: 'blood donation  search site' });
    
  });
  module.exports = router;