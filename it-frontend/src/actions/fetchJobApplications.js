export const clearJobApplications = () => {
    return {
        type: "CLEAR_MY_JOB_APP"
    }
}

export const ADD_APPLICATION = jobApplication => {
    return {
        type: "ADD_APPLICATION",
        jobApplication
    }
}



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

export const createJobApplication = jobApplicationData => {

    return dispatch => {

        const getBackJobApplicationData = {
            jobApplication: {
                application_date: jobApplicationData.applicationDate,
                company: jobApplicationData.company,
                role: jobApplicationData.role,
                contact: jobApplicationData.contact,
                interview_status: jobApplicationData.interviewStatus,
                notes: jobApplicationData.notes,
                user_id: jobApplicationData.userId
            }
        }

        return fetch('http://localhost:3001/api/v1/job_applications', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getBackJobApplicationData)
        })
        .then(response => response.json())

    }
}