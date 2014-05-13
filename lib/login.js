var Users = require('../app/collections/users');

var login = {
  handleLogin: function(req, res) {
    var target = req.body; // user.password
    Users.hasUserName(target.name, function(userArray){
      var user = userArray[0];
      if(user) {
        // check password
        Users.hashPassword(target.password, function(salted){
          var isValid = Users.checkPassword(user.get('password'), salted);
          if(isValid){
            res.render('/');
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
