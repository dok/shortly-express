var Users = require('../app/collections/users');
var User = require('../app/models/user');

var signup = {
  createUser: function(request, response){
    var username = request.body.username;
    var password = request.body.password;

    var user = new User({
      username:username,
      password: password
    });

    debugger;

    user.save().then(function(newUser){
      Users.add(newUser);
      response.send(200, '/');
    });
  }
};

module.exports = signup;


