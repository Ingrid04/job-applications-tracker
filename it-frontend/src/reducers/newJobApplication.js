const initialState = {
    applicationDate: "",
    company: "",
    role: "",
    contact: "",
    interviewStatus: "",
    notes: ""

}
export default(state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_JOB_APP_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_JOB_APP_FORM":
            return initialState
        default:
            return state;
    }
}
