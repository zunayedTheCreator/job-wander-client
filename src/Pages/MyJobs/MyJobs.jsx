import React from 'react';
import { useState } from "react";
import MyJobTable from "./MyJobTable";

const MyJobs = () => {
    const [loadedDatas , setLoadedDatas] = useState([])

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const email1 = signedUser?.email;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const email2 = loggedUser?.providerData[0]?.email;

    const currentEmail = email1 || email2;

    fetch(`http://localhost:5000/job/${currentEmail}`)
    .then(res => res.json())
    .then(data => {
        setLoadedDatas(data)
    })
    .catch(error => {
        console.error(error);
    })

    return (
        <div className="mt-10 w-full lg:w-[1000px] xl:w-[1300px] mx-auto">
            <div>
                <h2 className="text-4xl text-sky-500 font-bold text-center">Your Jobs</h2>
                <div className="border-t-2 border-sky-600 w-[300px] mx-auto mt-2 mb-6"></div>
            </div>
            <div className="overflow-x-auto border-b-2 border-sky-500">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="border-b-2 border-sky-500">
                        <th>Available</th>
                        <th>Job Title</th>
                        <th>Posting Date</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                        <th className="w-12"></th>
                        <th className="w-12"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            loadedDatas.map(job => <MyJobTable key={job._id} job={job} setLoadedDatas={setLoadedDatas} loadedDatas={loadedDatas}></MyJobTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;