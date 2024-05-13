import React from 'react';
import { FaRegClock, FaUserFriends } from "react-icons/fa";

const TabsCard = ({job}) => {

    const {user_name, job_title, salary, posting_date, deadline_date, total_applicants} = job;

    return (
        <div className="border-2 border-sky-500 w-[330px] md:w-[400px] rounded mx-auto lg:mx-0 p-3">
            <h3 className="font-bold text-sm">Publisher: {user_name}</h3>
            <div className="border-t-2 border-sky-500 mt-2 mb-3"></div>
            <h3 className="font-bold text-xl my-2">-{job_title}</h3>
            <h4 className="font-bold">Salary: ${salary}</h4>
            <h4 className="font-bold flex items-center gap-1">Posting Date: <FaRegClock className="text-lg ml-1"></FaRegClock> {posting_date}</h4>
            <h4 className="font-bold flex items-center gap-1">Deadline: <FaRegClock className="text-lg ml-1"></FaRegClock> {deadline_date}</h4>
            <div className="flex items-center justify-between border-t-2 border-sky-500 mt-3 pt-2">
                <h5 className="font-bold flex items-center gap-1"><FaUserFriends className="text-lg"></FaUserFriends> {total_applicants} - Applicants</h5>
                <button className="btn min-h-0 h-10 rounded bg-sky-500 hover:bg-sky-400 font-bold text-black">Details</button>
            </div>
        </div>
    );
};

export default TabsCard;