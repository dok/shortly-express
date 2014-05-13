var expect = require('chai').expect;
var request = require('request');
var bcrypt = require('bcrypt');
var db = require('../app/config');
var Users = require('../app/collections/users');
var User = require('../app/models/user');
var Links = require('../app/collections/links');
var Link = require('../app/models/link');


Users.hashPassword = function(password, callback){
  bcrypt.genSalt(10, function(err, salt){
    if(err){console.log(err);}
    bcrypt.hash(password, salt, function(err, hash){
      console.log('in the callback');
      callback(hash);
    });
  });
};

describe('Users', function() {
  it('should test the salt', function(done) {
    var ps = 'hello world';
    Users.hashPassword(ps, function(salted) {
      console.log('hola ', salted);
      expect(true).to.equal(true);
      done();
    });
  });

  it('should find an existing user', function(done) {
    var user = 'fred';
    Users.hasUserName(user, function(users) {
      console.log('users: ', users);
      var fred = users[0];
      expect(fred).to.exist;
      expect(fred.username).to.equal('fred');
      done();
    });
  });
});
