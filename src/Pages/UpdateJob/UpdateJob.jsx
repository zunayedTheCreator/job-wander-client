import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyDynamicTitle from '../../MyDynamicTitle';

const UpdateJob = () => {
    MyDynamicTitle('JobWander | Update Job')
    const job = useLoaderData();
    const {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants, _id} = job;
    
    const [startDate, setStartDate] = useState(new Date(deadline_date));
    const currentDeadLine = startDate.toISOString().slice(0, 10);
    console.log(currentDeadLine);

    const handleUpdateItem = e => {
        e.preventDefault();
        const form = e.target;

        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting_date = form.posting_date.value;
        const deadline_date = currentDeadLine;
        const photo = form.photo.value;

        const updateItem = {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants}

        console.log(updateItem);

        // send item to server
        fetch(`https://job-wander-server.vercel.app/job/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Updated!',
                    text: 'Job updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Nice'
                })
            }
        })
    }

    return (
        <div className="pt-10">
            <form onSubmit={handleUpdateItem} className="border-sky-500 border-2 w-full lg:w-[1000px] xl:w-[1200px] mx-auto rounded-md py-12 pt-6 drop-shadow shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6">Update Job: {job_title}</h1>
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input readOnly defaultValue={user_name} type="text" name="user_name" placeholder="User Name" className="input input-bordered rounded w-full md:w-1/2" />
                    <input readOnly defaultValue={user_email} type="text" name="user_email" placeholder="User Email" className="input input-bordered rounded w-full md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input required defaultValue={job_title} type="text" name="job_title" placeholder="Job Title" className="input input-bordered rounded w-full md:w-1/2" />
                    <select defaultValue={job_category} placeholder="fgnjfkd" required name="job_category" className="select select-bordered rounded w-full md:w-1/2">
                        <option selected>No category</option>
                        <option>On-Site Jobs</option>
                        <option>Remote Jobs</option>
                        <option>Hybrid Jobs</option>
                        <option>Part-Time Jobs</option>
                    </select>
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-2 flex flex-col md:flex-row md:justify-between gap-5">
                    <input defaultValue={salary} required type="number" name="salary" placeholder="Salary range" className="input input-bordered rounded w-full md:w-1/2" />
                    <input defaultValue={description} required type="text" name="description" placeholder="Job description" className="input input-bordered rounded w-full md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <label className="form-control w-full md:w-1/2">
                        <div className="label">
                            <span className="label-text">Posting Date</span>
                        </div>
                        <input readOnly defaultValue={posting_date} required type="date" name="posting_date" placeholder="Posting Date" className="input input-bordered rounded w-full" />
                    </label>
                    <label className="form-control w-full md:w-1/2">
                        <div className="label">
                            <span className="label-text">Job Deadline Date</span>
                        </div>
                        <DatePicker className="input input-bordered rounded w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                </div>

                {/* ------------------------- */}
                <div className="pb-5 px-4 md:px-24">
                    <input defaultValue={photo} required type="text" name="photo" placeholder="Picture URL for banner" className="input input-bordered rounded w-full" />
                </div>

                <div className="px-4 md:px-24">
                    <button className="btn w-full bg-sky-500 text-black font-bold rounded">Update Job</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateJob;