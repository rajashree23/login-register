var express = require('express');
var router = express.Router();
var userModel = require('../model/userdata');

var login = require('../controller/login');
var register= require('../controller/register');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
        res.redirect('/profile');
    } else {
        res.render('signup');
    }
});

router.get('/signin', function(req, res, next) {
  if (req.session.user) {
        res.redirect('/profile');
    } else {
        res.render('signin', {
            "msg": ""
        });
    }
});

router.get('/profile', function(req, res) {
    if (req.session.user) {
        res.render('profile', {
            'user': req.session.user
        });
    }
    else {
        res.redirect('/')
    }

});

router.get('/loginhere',function(req,res,next){
  res.redirect("/signin");
});

router.post('/profile1', register.register);


router.post('/profile2', login.login);
module.exports = router;
