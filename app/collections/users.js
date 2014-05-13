var db = require('../config');
var User = require('../models/user');
var bcrypt = require('bcrypt');

var Users = new db.Collection();

Users.model = User;

Users.hasUserName = function(name, callback){
//checks if name exists
  Users.query().where({username: name}).select()
    .then(function(response){
      // console.log('response: ', response);
      callback(response);
    });
};

Users.hashPassword = function(password, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
      console.log('hash: ', hash);
      callback(hash);
    });
  });
};

Users.checkPassword = function(userPassword, targetPassword, callback){
  //check if password matches at username
  //return true/false accrodingly
  // Users
  return userPassword === targetPassword;

};



module.exports = Users;


