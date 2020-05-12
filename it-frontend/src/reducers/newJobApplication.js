const initialState = {
    applicationDate: "",
    company: "",
    role: "",
    contact: "",
    interviewStatus: "",
    notes: ""

}
export default(state = initialState, action) => {
    // console.log("in the reducer", action)
    switch (action.type) {
        case "UPDATE_NEW_JOB_APP_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal
        case "RESET_NEW_JOB_APP_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.jobFormData
        default:
            return state;
    }
}
