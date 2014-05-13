var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', function(model, attrs, options) {
      //hash the password here
    });
  }
});



//if a user exists inside users,
//allow user to see links

module.exports = User;
