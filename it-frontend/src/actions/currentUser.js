import { resetLoginForm } from "./loginForm.js"
import { fetchJobApplications } from "./fetchJobApplications.js"

// synchronous action creators
export const setCurrentUser = user =>  {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators. thunk returns an action creator that is a function, which has as an argument this function, so returns
// an arrow function
export const login = (credentials, history) => {
    console.log(credentials)
    return(dispatch) => {
           return fetch('http://localhost:3001/api/v1/login', {
                credentials: "include",
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(resp => {return resp.json()})
            .then(user => { 
                if(user.error){
                    alert(user.error)
                } else {
                    dispatch({ type: 'SET_CURRENT_USER', user: user })
                    dispatch(fetchJobApplications())
                    dispatch(resetLoginForm())
                    history.push('/profile')
                    // history is a prop of route. It's a mutable object that allows me to change the url.
                }
            })
            .catch(console.log)
        };
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        // line above, to clear my action right away, I dont wanna wait for a response from my backend
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    console.log("DISPATCHING GET CURRENT USER")
    return(dispatch) => {
            return fetch('http://localhost:3001/api/v1/get_current_user', {
                credentials: "include",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {return resp.json()})
            .then(user => { 
                if(user.error){
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                    // dispatch(fetchJobApplications())
                }
            })
            .catch(console.log)
        };
}

