const Router = require("falcor-router");
// const User = require("./db/models/User");

module.exports = new Router([
  {
    route: "title",
    get: () => {
      return { path: [ "title" ], value: 'Hello world!' }
    },
  },
  {
    route: "user",
    get: () => {
      // return User.findOne({ where: { firstName: "John" } }).then( (user) => {
      //   return { path: [ "user" ], value: user.dataValues.firstName }
      // })
    },
  },
])
