var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    var that = this;
    var password = this.get('password');

    bcrypt.hash(password, null, null, function(err, hash){
      console.log('user pwd hash: ', hash);
      that.set('password', hash);
      // that.save();
    });
  }
});



//if a user exists inside users,
//allow user to see links

module.exports = User;
