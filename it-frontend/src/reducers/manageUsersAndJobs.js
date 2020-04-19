
// array of users. when INIT is fired is going to return the default state of all the reducers
import { combineReducers } from 'redux';
import uuid from "uuid";

const reducer = combineReducers({
    users: usersReducer,
    // job_applications: job_applicationsReducer
  });
  export default reducer;

  function usersReducer(state = { 
      users: [] }, action) {
      switch (action.type) {
          case "ADD_USER":
          return [...state, action.user];

      default:
          return state;
      }

  }
