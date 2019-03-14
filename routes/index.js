var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/loginhere',function(req,res,next){
  res.redirect("/signin");
});

router.post('/profile1',function(req,res,next){
  res.redirect("/profile");
});
router.post('/profile2',function(req,res,next){
  res.redirect("/profile");
});
module.exports = router;
