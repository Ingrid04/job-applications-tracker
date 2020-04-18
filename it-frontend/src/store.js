import { createStore, applyMiddleware, compose} from 'redux'
// compose allows us to combine a couple of different middlewares into one, so we can just pass one argument in the createStore
import reducer from "./reducers/manageUsersAndJobs";
import thunk from 'redux-thunk'

const store = createStore(reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 

export default store;