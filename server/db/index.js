//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Comment = require('./models/Comment');
const Ticket = require('./models/Ticket');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Comment,
    Ticket
  },
}
