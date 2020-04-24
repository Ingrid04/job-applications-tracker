function jobApplicationsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_JOB_APPLICATIONS":
            // return {job_applications: action.payload}
            return [
                ...state,
                action.payload];
            // this is our new redux state
        case "CLEAR_MY_JOB_APP":
            return []
        default:
        return state;
    }
}

export default jobApplicationsReducer;