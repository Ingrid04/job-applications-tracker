export const updateNewJobAppForm = (name, value) => {
    return {
        type: "UPDATE_NEW_JOB_APP_FORM",
        formData: { name, value }
    }
}