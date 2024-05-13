import React, { useEffect, useState } from 'react';
import AppliedTable from './AppliedTable';

const AppliedJobs = () => {
    const [loadedDatas , setLoadedDatas] = useState([])

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const email1 = signedUser?.email;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const email2 = loggedUser?.providerData[0]?.email;

    const currentEmail = email1 || email2;

    console.log(loadedDatas.length);

    useEffect(() => {
        fetch(`http://localhost:5000/applied/${currentEmail}`)
        .then(res => res.json())
        .then(data => {
            setLoadedDatas(data)
        })
        .catch(error => {
            console.error(error);
        })
    }, [currentEmail]);

    return (
        <div className="mt-10 w-full lg:w-[1000px] xl:w-[1300px] mx-auto">
            <div>
                <h2 className="text-4xl text-sky-500 font-bold text-center">Your Applied Jobs</h2>
                <div className="border-t-2 border-sky-600 w-[300px] mx-auto mt-2 mb-6"></div>
            </div>
            <div className="overflow-x-auto border-b-2 border-sky-500">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="border-b-2 border-sky-500">
                        <th>Photo</th>
                        <th>Job Title</th>
                        <th>Job Category</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                        <th className="w-12"></th>
                        <th className="w-12"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            loadedDatas.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;