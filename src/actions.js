import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

const model = new Model({
  source: new HttpDataSource('http://localhost:3000/model.json')
});

// export function getPosts(user) {
//   model.get('user').then(res => {
//     console.log('res:', res.json);
//   });
//   return {
//   	type: "TEST"
//   }; 
// }

export function getUsers() {
  return dispatch => {
    // Want to get first 10 users, along with users' firstname, lastname, and related client
    // model.get('users').then(res => {
    //   console.log('res:', res.json);
    //   const users = res.json && res.json.users;
    //   dispatch({
    //     type: "RECEIVE_USERS",
    //     users,
    //   });
    // });

    // Getting the specific value (number, string, bool) from this array number. Can be the id.
    // model.getValue('users[0].firstName').then(firstName => {
    //   console.log('res:', res);
    //   dispatch({
    //     type: "RECEIVE_USER_FIRST_NAME",
    //     firstName,
    //   });
    // });

    // Getting the specific value from this array number. Can be the id.
    // model.get('users[0]').then(res => {
    //   const users = res.json.users;
    //   dispatch({
    //     type: "RECEIVE_USER",
    //     users,
    //   });
    // });

    // Getting the range of users with firstName and lastName
    // model.get(['users', { from: 0, to: 10 }, ['firstName', 'lastName']]).then(res => {
    //   console.log('res:', res.json);
    //   const users = res.json && res.json.users;
    //   dispatch({
    //     type: "RECEIVE_USERS",
    //     users,
    //   });
    // });

    // Getting the range of users with firstName and lastName
    // model.setValue(['users', 1, 'firstName'], 'Martin').then(res => {
    //   console.log('res:', res.json);
    //   const users = res.json && res.json.users;
    //   dispatch({
    //     type: "RECEIVE_USERS",
    //     users,
    //   });
    // });

    
  }
}
