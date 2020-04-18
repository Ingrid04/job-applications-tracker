import { createStore, applyMiddleware, compose} from 'redux'
import reducer from "./reducers/manageUsersAndJobs";
import thunk from 'redux-thunk'

const store = createStore(reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 

export default store;