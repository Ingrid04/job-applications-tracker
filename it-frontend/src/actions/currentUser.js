// synchronous action creators
export const setCurrentUser = user =>  {
    // return(dispatch) => {
    //     dispatch({type: 'CURRENT_USER'});
    //     fetch('http://localhost:3000/api/v1/users')
    //     .then(resp => {return resp.json()})
    //     .then(user => { dispatch({ type: 'SET_CURRENT_USER', payload: user})} );
    // };
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// asynchronous action creators. thunk returns a function, which has as an argument this function, so returns
// an arrow function
export const login = credentials => {
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
                    dispatch({ type: 'SET_CURRENT_USER', user: user})
                }
            })
            .catch(console.log)
        };
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
                }
            })
            .catch(console.log)
        };
}