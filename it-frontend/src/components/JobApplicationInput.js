import React from 'react'

const JobApplicationInput = ({ job }) => {
    return (
    <li> {job[0].application_date} - {job[0].company} - {job[0].role} - {job[0].contact} - {job[0].interview_status} - {job[0].notes}</li>
    )
}


export default JobApplicationInput;