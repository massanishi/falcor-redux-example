const Router = require("falcor-router");
const $ref = require('falcor').Model.ref;
const User = require("./models/User");

const mock = {
  content: 'content',
  sub: 'subtitle',
};
console.log('User:', User);
module.exports = new Router([
  {
    route: "title",
    get: (path) => {
      console.log('path:', path);
      return { path: [ "title" ], value: $ref({hi: 's'}) };
    },
  },
  {
    route: "user",
    get: () => {
      return User.findOne({ where: { firstName: "John" } }).then(user => {
        return { path: [ "user" ], value: $ref(user) }
      })
      // return { path: [ "user" ], value: 'user' };
    },
  },
])
