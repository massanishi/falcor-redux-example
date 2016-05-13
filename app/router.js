const Router = require("falcor-router");
const $ref = require('falcor').Model.ref;
const User = require("./models/User");

const mock = {
  content: 'content',
  sub: 'subtitle',
};

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
  {
    route: "users[{integers:indices}]",
    get: (path) => {
      return User.findAll().then(users => {
        const array = [];
        path.indices.forEach(index => {
          const u = users[index];
          if (!u) {
            array.push({
              path: ['users', index],
              value: null,
            });
          } else {
           array.push({
              path: ['users', index],
              value: $ref(u),
            }); 
          }
        });

        return { path: [ "users" ], value: $ref(users) }
      });
    },
  },
])
