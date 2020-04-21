
// array of users. when INIT is fired is going to return the default state of all the reducers
import { combineReducers } from 'redux';
import uuid from "uuid";
import currentUser from './currentUser';

const reducer = combineReducers({
    users: usersReducer,
    job_applications: job_applicationsReducer,
    currentUser: currentUserReducer
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
  function currentUserReducer(state= null, action) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user
        default:
            return state;
    }

}

  function job_applicationsReducer(state = {
      job_applications: [] }, action) {
        // debugger;
    // console.log(state)
      switch(action.type) {
          case "ADD_JOB_APPLICATIONS ":
              return {
                  ...state,
                  job_applications: action.payload};
            //   this is our new redux state
      default:
          return state;
      }
  }
  
