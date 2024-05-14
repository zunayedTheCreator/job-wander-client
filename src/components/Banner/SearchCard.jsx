import React from 'react';
import { FaBriefcase, FaClock, FaDollarSign, FaEnvelope, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchCard = ({job}) => {
    const {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants, _id} = job;

    return (
        <div>
            <div className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl w-full lg:w-[1000px] xl:w-[1200px] lg:h-[400px] mx-auto border-2 border-sky-500 mt-14 mb-14 rounded-none">
                <figure><img className='w-full lg:w-[400px] h-[500px] lg:h-[400px]' src={photo} alt={job_title} /></figure>
                <div className="card-body flex-col justify-between">
                    <div>
                        <h2 className="card-title text-5xl font-bold text-sky-500 mb-3">{job_title}</h2>
                        <p className='font-bold text-lg mb-5'>- {description}</p>
                        <h3 className='text-lg font-bold flex items-center gap-1 mb-3'><FaDollarSign className='text-2xl'></FaDollarSign> {salary}</h3>
                        <h3 className='text-lg font-bold flex items-center gap-1 mb-3'><FaClock className='text-2xl'></FaClock> {deadline_date} - Deadline</h3>
                        <h3 className='text-lg font-bold flex items-center gap-1 mb-3'><FaBriefcase className='text-2xl'></FaBriefcase> {job_category}</h3>
                        <h3 className='text-lg font-bold flex items-center gap-1'><FaEnvelope className='text-2xl'></FaEnvelope> {user_email} - Publisher</h3>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <h3 className='text-xl font-bold flex items-center gap-1'><FaUserFriends className='text-xl'></FaUserFriends>Applicants: {total_applicants}</h3>
                        <Link to={`/job-details/${_id}`}><button className='btn rounded bg-sky-500 hover:bg-sky-400 text-black font-bold'>View</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;