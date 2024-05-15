import React from 'react';
import { useLoaderData } from "react-router-dom";
import JobTables from "./JobTables";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { Grid, Hearts } from 'react-loader-spinner';

const AllJobs = () => {
    const [jobResults, setJobResults] = useState([]);
    const [searchJobs, setSearchJobs] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        if (jobs) {
            setJobResults(jobs);
            setSearchJobs(jobs);
        }
    }, [jobs]);

    const handleSearch = e => {
        e.preventDefault();
        const input = e.target.search.value;
        console.log(input);

        if (input === '') {
            Swal.fire({
                title: "Bro search something",
                icon: "error"
              });
              setSearchJobs(jobResults)
        }
        else{
            fetch(`http://localhost:5000/job/${input}`, {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setSearchJobs(data)
            })
        }
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="mt-14 w-full lg:w-[1000px] xl:w-[1300px] mx-auto">
            <div className="w-full flex justify-end">
                <form onSubmit={handleSearch} className='w-fit mx-auto md:mx-0 md:mr-5'>
                    <div className='w-fit py-1 px-3 gap-2 flex items-center border-2 rounded-md'>
                        <input name='search' type="text" placeholder="Type here" className="input w-full max-w-xs no-outline rounded-none border font-bold" />
                        <button className='btn px-6 min-h-0 h-[46px] border-none bg-sky-400 hover:bg-sky-300'><FaSearch className='text-black'></FaSearch></button>
                    </div>
                </form>
            </div>

            <div className="border-t-2 mx-3 mb-5 mt-6"></div>

            { loading ? (<div className='w-fit my-20 mx-auto'><Grid height={50} width={50} color={'#7DD3FC'} loading={loading} size={30}></Grid></div>) : (<div className="overflow-x-auto border-b-2 border-sky-500">
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
                            searchJobs.map(job => <JobTables key={job._id} job={job}></JobTables>)
                        }
                    </tbody>
                </table>
                {
                    jobResults.length === 0 ? <h2 className='text-4xl text-red-600 font-bold text-center my-8'>No jobs available</h2> : <></>
                }
                {
                    searchJobs.length === 0 ? <h2 className='text-4xl text-red-600 font-bold text-center my-8'>No jobs found</h2> : <></>
                }
            </div>)}
        </div>
    );
};

export default AllJobs;