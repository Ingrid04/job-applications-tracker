import React from 'react'

const JobApplicationInput = ({ job }) => {

    return (
        <li> {job[1].application_date} - {job[1].company} - {job[1].role} - {job[1].contact} - {job[1].interview_status} - {job[1].notes}</li>
    )
}


export default JobApplicationInput;