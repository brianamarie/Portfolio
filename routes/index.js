var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Briana Swift' });
});

router.get('/pomodoro', function (req, res, next) {
  res.render('/pomodoro.jade', { title: 'Pomodoro Timer');
});


module.exports = router;
