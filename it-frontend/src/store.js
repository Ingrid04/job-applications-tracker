import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
// compose allows us to combine a couple of different middlewares into one, so we can just pass one argument in the createStore
// import reducer from "./reducers/manageUsersAndJobs";

import jobApplicationsReducer from "./reducers/jobApplicationsReducer"
import currentUserReducer from "./reducers/currentUser"
import loginForm from "./reducers/loginForm"
import thunk from 'redux-thunk'

const reducer = combineReducers({
    jobApplicationsReducer,
    currentUserReducer,
    loginForm
  });

const store = createStore(reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 
// everytime we update something in our store, this is the reducer that it is gonna be returning that new
// updated state.
// the reason we create store why we have to pass the reducer in as an argument is we're saying this is our store
// anytime something is dispatched, any time we see dispatch, we want that action object to be an action object
// to be sent to this reducer which will then update this store value of this store.

export default store;