import React from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobTables = ({job}) => {

    const {job_title, salary, posting_date, deadline_date, _id} = job;

    const deadline = new Date(deadline_date);
    const today = new Date()

    return (
        <tr className="my-4 border-b-2 border-slate-200">
            <th>{deadline < today ? <FaRegTimesCircle className="text-lg text-red-500"></FaRegTimesCircle> : <FaRegCheckCircle className="text-lg text-lime-500"></FaRegCheckCircle>}</th>
            <td className="text-lg font-bold">{job_title}</td>
            <td className="font-bold">{posting_date}</td>
            <td className="font-bold">{deadline_date}</td>
            <td className="font-bold">${salary}</td>
            <td><Link to={`/job-details/${_id}`}><button className="btn min-h-0 h-10 rounded bg-sky-500 hover:bg-sky-400 font-bold text-black">Details</button></Link></td>
        </tr>
    );
};

export default JobTables;