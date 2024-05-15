import React from 'react';

const AppliedTable = ({job}) => {
    const {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants}= job;
    return (
        <tr className="my-4 border-b-2 border-slate-200">
            <th>
                <div className="avatar">
                <div className="mask mask-squircle w-24 h-24">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
            </th>
            <td className="text-lg font-bold">{job_title}</td>
            <td className="font-bold">{job_category}</td>
            <td className="font-bold">{deadline_date}</td>
            <td className="font-bold">${salary}</td>
        </tr>
    );
};

export default AppliedTable;