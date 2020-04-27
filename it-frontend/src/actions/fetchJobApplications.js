import { resetNewJobAppForm } from './newJobApplicationForm'

export const clearJobApplications = () => {
    return {
        type: "CLEAR_MY_JOB_APP"
    }
}

export const addApplication = jobApplication => {
    return {
        type: "ADD_APPLICATION",
        jobApplication
    }
}

export const updateJobAppSuccess = jobApplication => {
    return {
        type: "UPDATE_APPLICATION",
        jobApplication
    }
}

export const deleteApplicationSuccess = jobApplicationId => {
    return {
        type: "DELETE_APPLICATION",
        jobApplicationId
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

export const createJobApplication = (jobApplicationData, history ) => {

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
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addApplication(response.data))
                // I am adding the job application to the redux store
                dispatch(resetNewJobAppForm())
                // I am dispatching to clear the form
                history.push(`/application/${response.id}`)
            }
        })

    }
}

export const  updateJobApp = (jobApplicationData, history ) => {

        return dispatch => {
    
            const getBackJobApplicationData = {
                jobApplication: {
                    application_date: jobApplicationData.applicationDate,
                    company: jobApplicationData.company,
                    role: jobApplicationData.role,
                    contact: jobApplicationData.contact,
                    interview_status: jobApplicationData.interviewStatus,
                    notes: jobApplicationData.notes
                }
            }
    
            return fetch(`http://localhost:3001/api/v1/job_applications/${jobApplicationData.jobId}`, {
                credentials: "include",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(getBackJobApplicationData)
            })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(updateJobAppSuccess(response))
                    // I am adding the job application to the redux store
                    // dispatch(resetNewJobAppForm())
                    // I am dispatching to clear the form
                    history.push(`/application/${response.id}`)
                }
            })
    
        }
}


export const deleteJobApp = (jobApplicationId, history) => {

    return dispatch => {

        return fetch(`http://localhost:3001/api/v1/job_applications/${jobApplicationId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(deleteApplicationSuccess(jobApplicationId))
                history.push("/profile")
            }
        })
    }

}