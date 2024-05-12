import Swal from 'sweetalert2'

const AddJob = () => {
    const presentDate = new Date();
    const formattedDate = presentDate.toISOString().substr(0, 10);

    const total_applicants = 0;

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const email1 = signedUser?.email;
    const name1 = signedUser?.name;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const email2 = loggedUser?.providerData[0]?.email;
    const name2 = loggedUser?.providerData[0]?.displayName;

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting_date = form.posting_date.value;
        const deadline_date = form.deadline_date.value;
        const photo = form.photo.value;
        const newJob = {user_name, user_email, job_title, job_category, salary, description, posting_date, deadline_date, photo, total_applicants}

        console.log(newJob);

        fetch('http://localhost:5000/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Job successfully added',
                    icon: 'success',
                    confirmButtonText: 'Nice'
                })
            }
        })
    }

    return (
        <div className="pt-10">
                <form onSubmit={handleAddJob} className="border-sky-500 border-2 w-full lg:w-[1000px] xl:w-[1200px] mx-auto rounded-md py-12 pt-6 drop-shadow shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6">Add a Job</h1>
                    <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                        <input readOnly defaultValue={name1 || name2} type="text" name="user_name" placeholder="User Name" className="input input-bordered rounded w-full md:w-1/2" />
                        <input readOnly defaultValue={email1 || email2} type="text" name="user_email" placeholder="User Email" className="input input-bordered rounded w-full md:w-1/2" />
                    </div>

                    {/* ------------------------- */}
                    <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                        <input required type="text" name="job_title" placeholder="Job Title" className="input input-bordered rounded w-full md:w-1/2" />
                        <select placeholder="fgnjfkd" required name="job_category" className="select select-bordered rounded w-full md:w-1/2">
                            <option selected>No category</option>
                            <option>On-Site Job</option>
                            <option>Remote Job</option>
                            <option>Part-Time Job</option>
                            <option>Hybrid Job</option>
                        </select>
                    </div>

                    {/* ------------------------- */}
                    <div className="px-4 md:px-24 pb-2 flex flex-col md:flex-row md:justify-between gap-5">
                        <input required type="text" name="salary" placeholder="Salary range" className="input input-bordered rounded w-full md:w-1/2" />
                        <input required type="text" name="description" placeholder="Job description" className="input input-bordered rounded w-full md:w-1/2" />
                    </div>

                    {/* ------------------------- */}
                    <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Posting Date</span>
                            </div>
                            <input required defaultValue={formattedDate} type="date" name="posting_date" placeholder="Posting Date" className="input input-bordered rounded w-full" />
                        </label>
                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Job Deadline Date</span>
                            </div>
                            <input required type="date" name="deadline_date" placeholder="Deadline Date" className="input input-bordered rounded w-full" />
                        </label>
                    </div>

                    {/* ------------------------- */}
                    <div className="pb-5 px-4 md:px-24">
                        <input required type="text" name="photo" placeholder="Picture URL for banner" className="input input-bordered rounded w-full" />
                    </div>

                    <div className="px-4 md:px-24">
                        <button className="btn w-full bg-sky-500 text-black font-bold rounded">Add Job</button>
                    </div>
                </form>
        </div>
    );
};

export default AddJob;