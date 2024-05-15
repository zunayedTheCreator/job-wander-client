import React from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyJobTable = ({job, loadedDatas, setLoadedDatas}) => {

    const {job_title, salary, posting_date, deadline_date, _id} = job;

    const deadline = new Date(deadline_date);
    const today = new Date()

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-wander-server.vercel.app/job/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        const remaining = loadedDatas.filter(item => item._id !== _id)
                        setLoadedDatas(remaining)
                    }
                })
            }
          });
    }

    return (
        <tr className="my-4 border-b-2 border-slate-200">
            <th>{deadline < today ? <FaRegTimesCircle className="text-lg text-red-500"></FaRegTimesCircle> : <FaRegCheckCircle className="text-lg text-lime-500"></FaRegCheckCircle>}</th>
            <td className="text-lg font-bold">{job_title}</td>
            <td className="font-bold">{posting_date}</td>
            <td className="font-bold">{deadline_date}</td>
            <td className="font-bold">${salary}</td>
            <td><Link to={`/update-job/${_id}`}><button className="btn min-h-0 h-10 rounded bg-yellow-400 hover:bg-yellow-300 font-bold text-black">Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn min-h-0 h-10 rounded bg-red-500 hover:bg-red-400 font-bold text-black">Delete</button></td>
        </tr>
    );
};

export default MyJobTable;