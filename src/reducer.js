import { combineReducers } from "redux"

const user = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_USERS':
    // not duplicate checking... 
    // If falcor's caching, the component should access the db directly. 
      return [...state, action.users];
    default:
      return state;
  }
}

const reducer = combineReducers({
  user,
})

export default reducer;
