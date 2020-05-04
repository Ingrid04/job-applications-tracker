import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import usersReducer from "./reducers/usersReducer"
import jobApplicationsReducer from "./reducers/jobApplicationsReducer"
import currentUserReducer from "./reducers/currentUser"
import loginForm from "./reducers/loginForm"
import newJobApplication from "./reducers/newJobApplication"
import thunk from 'redux-thunk'

const reducer = combineReducers({
    usersReducer,
    jobApplicationsReducer,
    currentUserReducer,
    loginForm,
    newJobApplication
  });

const store = createStore(reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 

export default store;