import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import Swal from 'sweetalert2'

const MyJobTable = ({job, loadedDatas, setLoadedDatas}) => {

    const {job_title, salary, posting_date, deadline_date, _id} = job;

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
                fetch(`http://localhost:5000/job/${_id}`, {
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
            <th><FaRegCheckCircle className="text-lg text-lime-500"></FaRegCheckCircle></th>
            <td className="text-lg font-bold">{job_title}</td>
            <td className="font-bold">{posting_date}</td>
            <td className="font-bold">{deadline_date}</td>
            <td className="font-bold">${salary}</td>
            <td><button className="btn min-h-0 h-10 rounded bg-yellow-400 hover:bg-yellow-300 font-bold text-black">Update</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn min-h-0 h-10 rounded bg-red-500 hover:bg-red-400 font-bold text-black">Delete</button></td>
        </tr>
    );
};

export default MyJobTable;