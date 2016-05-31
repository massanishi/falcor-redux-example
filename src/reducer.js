import { combineReducers } from "redux"

const users = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_USERS':
    // not duplicate checking... 
    // If falcor's caching, the component should access the db directly. 
    console.log('action:', action);
      return action.users;
    default:
      return state;
  }
}

const reducer = combineReducers({
  users,
})

export default reducer;
