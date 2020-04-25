export const updateNewJobAppForm = (name, value) => {
    const formData = { name, value }
    console.log("formData in the action creator", formData)
    return {
        type: "UPDATE_NEW_JOB_APP_FORM",
        formData
    }
}