const Sequelize = require("sequelize")
const db = require("../db")

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

User.sync({ force: true }).then(function() {
  // Table created
  User.create({
    firstName: "John",
    lastName: "Hancock",
  }).then(user => {
    console.log('created a user ');
  })
})

module.exports = User
