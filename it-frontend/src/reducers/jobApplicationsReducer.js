function jobApplicationsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_JOB_APPLICATIONS":
            // return {job_applications: action.payload}
            return [
                ...state,
                ...action.payload];
            // this is our new redux state
        case "ADD_APPLICATION":
            return state.concat(action.jobApplication);
        case "UPDATE_APPLICATION":
            console.log("this is ...", state)
            return state.map( array => array.id === action.id ? action.state : state )
        case "CLEAR_MY_JOB_APP":
            return []
        default:
        return state;
    }
}

export default jobApplicationsReducer;