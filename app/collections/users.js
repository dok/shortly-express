var db = require('../config');
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

var Users = new db.Collection();

Users.model = User;

Users.hasUserName = function(name, callback){
//checks if name exists
  Users.query().where({username: name}).column('username', 'password')
    .then(function(response){
      //console.log('response: ', response);
      callback(response);
    });
};

Users.hashPassword = function(password, hash, callback){
  bcrypt.compare(password, hash, function(err, res){
    //console.log('hash: ', hash);
    callback(hash);
  });
};




module.exports = Users;
