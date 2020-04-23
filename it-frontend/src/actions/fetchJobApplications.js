
export const fetchJobApplications = () =>  {
    return (dispatch) => {
        // debugger
        // dispatch({type: 'LOADING_JOB_APPLICATIONS'});
        console.log('inside fetch job applications')
        return fetch('http://localhost:3001/api/v1/job_applications', {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => {return resp.json()})
        // .then(data => console.log(data))
        .then(job_applications => { dispatch({ type: "ADD_JOB_APPLICATIONS", payload: job_applications})})
    };
}

// our actions are sent to our reducers through mapStateToProps???

