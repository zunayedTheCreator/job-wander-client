import React from 'react';
import { useLoaderData } from "react-router-dom";
import JobTables from "./JobTables";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllJobs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [jobResults, setJobResults] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        if (jobs) {
            setJobResults(jobs);
        }
    }, [jobs]);

    const handleSearch = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`/job?query=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setJobResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setJobResults([]);
        }
    };

    return (
        <div className="mt-14 w-full lg:w-[1000px] xl:w-[1300px] mx-auto">
            <div className="w-full flex justify-end">
                <form onSubmit={handleSearch} className='w-fit mx-auto md:mx-0 md:mr-5'>
                    <div className='w-fit py-1 px-3 gap-2 flex items-center border-2 rounded-md'>
                        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Type here" className="input w-full max-w-xs no-outline rounded-none border text-black font-bold" />
                        <button className='btn px-6 min-h-0 h-[46px] border-none bg-sky-400 hover:bg-sky-300'><FaSearch className='text-black'></FaSearch></button>
                    </div>
                </form>
            </div>

            <div className="border-t-2 mx-3 mb-5 mt-6"></div>

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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            jobResults.map(job => <JobTables key={job._id} job={job}></JobTables>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;