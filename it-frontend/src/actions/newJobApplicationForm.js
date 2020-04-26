export const updateNewJobAppForm = (name, value) => {
    const formData = { name, value }
    console.log("formData in the action creator", formData)
    return {
        type: "UPDATE_NEW_JOB_APP_FORM",
        formData
    }
}

export const resetNewJobAppForm = () => {
    return {
        type: "RESET_NEW_JOB_APP_FORM",
    }
}

export const setFormDataForEdit = job => {
    const jobFormData = {
        applicationDate: job.application_date,
        company: job.company,
        role: job.role,
        contact: job.contact,
        interviewStatus: job.interview_status,
        notes: job.notes
    }
    return{
        type: "SET_FORM_DATA_FOR_EDIT",
        jobFormData
    }
}