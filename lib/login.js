var Users = require('../app/collections/users');
var util = require('./utility');

var login = {
  handleLogin: function(req, res) {
    var target = req.body; // user.password
    Users.hasUserName(target.username, function(userArray){
      var user = userArray[0];
      if(user) {
        // check password
        Users.hashPassword(target.password, user.password, function(result){
          if(result){
            req.session.user = true;
            res.redirect('/');
          } else {
            res.end('Invalid password');
          }
        });
      } else {
        res.end('Invalid username');
      }
    });
  }
};

module.exports = login;


