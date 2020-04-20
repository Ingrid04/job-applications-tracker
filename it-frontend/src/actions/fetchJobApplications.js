export const fetchJobApplications = () =>  {
    return(dispatch) => {
        dispatch({type: 'LOADING_JOB_APPLICATIONS'});
        fetch('http://localhost:3000/api/v1/job_applications')
        .then(resp => {return resp.json()})
        .then(job_applications => { dispatch({ type: 'ADD_JOB_APPLICATIONS', payload: job_applications})} );
    };
}

// our actions are sent to our reducers through mapStateToProps???

