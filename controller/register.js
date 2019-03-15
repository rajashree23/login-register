var mongoose = require('mongoose');
var userModel = require('../model/userdata');
var bodyParser=require('body-parser');
var register = function(req, res) {
    var usermodel = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        username:req.body.username,
        gender: req.body.gender,
    });
   console.log(usermodel);
    usermodel.save(function(err, doc) {
        if (err) res.render('signin', {

            msg: "You're already a member"
        })
        res.render('signin', {
            msg: "Registered Successfully"
        })
    });
};

module.exports = {
    "register": register
};
