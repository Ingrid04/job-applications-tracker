function jobApplicationsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_JOB_APPLICATIONS":
            return action.payload;
            // return Array.isArray(action.payload) ? action.payload : [action.payload]
        case "ADD_APPLICATION":
            return state.concat(action.jobApplication);
        case "UPDATE_APPLICATION":
            console.log("this is ...", action)
            return state.map( job => job.id === action.jobApplication.id ? action.jobApplication : job )
        case "DELETE_APPLICATION":
            return state.filter(job => job.id !== action.jobApplicationId)
        case "CLEAR_MY_JOB_APP":
            return []
        default:
        return state;
    }
}

export default jobApplicationsReducer;