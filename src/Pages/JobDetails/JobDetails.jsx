import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { FaBriefcase, FaClock, FaDollarSign, FaUserFriends } from 'react-icons/fa';
import Swal from 'sweetalert2'
import MyDynamicTitle from '../../MyDynamicTitle';

const JobDetails = () => {
    MyDynamicTitle('JobWander | Job Detail')
    const job = useLoaderData();

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const email1 = signedUser?.email;
    const name1 = signedUser?.name;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const email2 = loggedUser?.providerData[0]?.email;
    const name2 = loggedUser?.providerData[0]?.displayName;

    const currentEmail = email1 || email2;
    const currentName = name1 || name2;
    
    const {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants, _id} = job;

    const [applicantsCount, setApplicantsCount] = useState(total_applicants);

    const deadline = new Date(deadline_date);
    const today = new Date()
    
    const [isEmployer, setIsEmployer] = useState(false);

    useEffect(() => {
        setIsEmployer(currentEmail === user_email);
    }, [currentEmail, user_email]);
    
    
    const handleApply = async e => {
        e.preventDefault();
        
        const resume_link = e.target.resume_link.value;
        
        const appliedJob = {user_name: currentName, user_email: currentEmail, job_title, job_category, salary, description, posting_date, deadline_date, photo, main_id: _id, resume_link}
        console.log(appliedJob);
        
        const alreadyApplied = localStorage.getItem(appliedJob.user_email+_id);
        if (alreadyApplied === currentEmail+_id) {
            Swal.fire({
                title: 'Hold On!',
                text: 'You already applied for this job',
                icon: 'error',
                confirmButtonText: "I'm Sorry"
            })
        }
        else{
            try {
                const response = await fetch(`https://job-wander-server.vercel.app/job/${_id}`, {
                    method: 'PATCH'
                });
                if (response.ok) {
                    setApplicantsCount(prevCount => prevCount + 1);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job applied successfully',
                        icon: 'success',
                        confirmButtonText: 'Nice'
                    })
                    fetch('https://job-wander-server.vercel.app/applied', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(appliedJob)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem(appliedJob.user_email+appliedJob.main_id, appliedJob.user_email+appliedJob.main_id)
                    })
                } else {
                    console.error('Failed to apply for job:', response.statusText);
                }
            } catch (error) {
                console.error('Error applying for job:', error);
            }
        }
    };

    return (
        <div>
            <div className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl w-full lg:w-[900px] lg:h-[400px] mx-auto border-2 border-sky-500 mt-14 mb-14 rounded-none">
                <figure><img className='w-full lg:w-[400px] h-[500px] lg:h-[400px]' src={photo} alt={job_title} /></figure>
                <div className="card-body flex-col justify-between">
                    <div>
                        <h2 className="card-title text-5xl font-bold text-sky-500 mb-3">{job_title}</h2>
                        <p className='font-bold text-lg mb-5'>- {description}</p>
                        <h3 className='text-lg font-bold flex items-center gap-1 mb-3'><FaDollarSign className='text-2xl'></FaDollarSign> {salary}</h3>
                        <h3 className='text-lg font-bold flex items-center gap-1 mb-3'><FaClock className='text-2xl'></FaClock> {deadline_date} - Deadline</h3>
                        <h3 className='text-lg font-bold flex items-center gap-1'><FaBriefcase className='text-2xl'></FaBriefcase> {job_category}</h3>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <h3 className='text-xl font-bold flex items-center gap-1'><FaUserFriends className='text-xl'></FaUserFriends>Applicants: {applicantsCount}</h3>
                        {
                            deadline < today ? <h2 className='font-bold text-red-600 text-lg'>Job Expired</h2> : <button disabled={isEmployer} onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline border-2 font-bold border-lime-500 hover:border-lime-400 text-lime-500 hover:bg-lime-400 hover:text-black px-6 rounded">Apply</button>
                        }

                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box rounded-md border-2 border-sky-600">
                                <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Please Fill the form</h3>
                                <div className='mt-4'>
                                    <form onSubmit={handleApply}>
                                        <input defaultValue={currentName} readOnly type="text" placeholder="Your Name" className="input input-bordered w-full rounded mb-3 font-bold border-2 border-sky-500" />
                                        <input defaultValue={currentEmail} readOnly type="email" placeholder="Your Email" className="input input-bordered w-full rounded mb-3 font-bold border-2 border-sky-500" />
                                        <input name='resume_link' required type="text" placeholder="Resume Link." className="input input-bordered w-full rounded mb-3 font-bold border-2 border-sky-500" />
                                        <button className='btn bg-sky-500 hover:bg-sky-400 rounded w-full font-bold text-black'>Confirm Apply</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;