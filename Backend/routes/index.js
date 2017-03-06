const Polla = require('../models/polls.js');
const User = require('../models/user.js');
console.log(User.list);
console.log(Polla.list);
module.exports = function(app) {

  app.get('/games', Polla.list);
  app.get('/users', User.list);
}
