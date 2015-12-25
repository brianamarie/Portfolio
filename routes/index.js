var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Briana Swift' });
});

module.exports = router;
