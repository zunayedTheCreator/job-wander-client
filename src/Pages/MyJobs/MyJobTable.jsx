import { FaRegCheckCircle } from "react-icons/fa";

const MyJobTable = ({job}) => {

    const {job_title, salary, posting_date, deadline_date} = job;

    return (
        <tr className="my-4 border-b-2 border-slate-200">
            <th><FaRegCheckCircle className="text-lg text-lime-500"></FaRegCheckCircle></th>
            <td className="text-lg font-bold">{job_title}</td>
            <td className="font-bold">{posting_date}</td>
            <td className="font-bold">{deadline_date}</td>
            <td className="font-bold">${salary}</td>
            <td><button className="btn min-h-0 h-10 rounded bg-yellow-400 hover:bg-yellow-300 font-bold text-black">Update</button></td>
            <td><button className="btn min-h-0 h-10 rounded bg-red-500 hover:bg-red-400 font-bold text-black">Delete</button></td>
        </tr>
    );
};

export default MyJobTable;