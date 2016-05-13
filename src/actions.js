import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

const model = new Model({ source: new HttpDataSource('http://localhost:3000/model.json') });

export function getPosts(user) {
  model.get('user').then(res => {
    console.log('res:', res.json);
  });
  return {
  	type: "TEST"
  }; 
}

export function getUsers() {
  // Want to get first 10 users, along with users' firstname, lastname, 
  // and related posts.
  model.get('users').then(res => {
    console.log('res:', res.json);
  });
  return {
    type: "RECEIVE_USERS",
    users,
  }; 
}
