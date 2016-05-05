import { combineReducers } from "redux"
// import { reducer as falcorReducer } from "redux-falcor"


const user = (state={}, action) => {
  switch (action.type) {
    case 'Test':
      return state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  user,
})

export default reducer;
