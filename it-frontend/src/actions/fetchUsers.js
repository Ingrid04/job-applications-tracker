// export const addUser = user => {
//     return {
//       type: 'ADD_USER',
//       user
//     };
//   };

  export const fetchUsers = () =>  {
    return(dispatch) => {
        dispatch({type: 'LOADING_USERS'});
        fetch('http://localhost:3000/api/v1/users')
        .then(resp => {return resp.json()})
        .then(users => { dispatch({ type: 'ADD_USER', payload: users})} );
    };
}

// export const addJobApplication = job_application => {
//     return {
//       type: 'ADD_JOB_APPLICATION',
//       job_application
//     };
// };
  
// export const removeJobApplication = id => {
//     return {
//       type: 'REMOVE_JOB_APPLICATION',
//       id
//     };
// };
