import React, { useEffect, useState } from 'react';
import AppliedTable from './AppliedTable';
import { FaAngleDown } from 'react-icons/fa';
import { Grid } from 'react-loader-spinner';
import { Document, PDFDownloadLink, Page, Text, View } from '@react-pdf/renderer';
import MyDynamicTitle from '../../MyDynamicTitle';

const AppliedJobs = () => {
    MyDynamicTitle('JobWander | Applied Jobs')
    const [loadedDatas , setLoadedDatas] = useState([])
    const [filteredDatas , setFilteredDatas] = useState([])

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const email1 = signedUser?.email;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const email2 = loggedUser?.providerData[0]?.email;

    const currentEmail = email1 || email2;

    console.log(loadedDatas.length);

    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/applied/${currentEmail}`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setLoadedDatas(data)
            setFilteredDatas(data)
        })
        .catch(error => {
            console.error(error);
        })
    }, [currentEmail]);

    const handleAllJob = () => {
        setFilteredDatas(loadedDatas);
    }

    const handleOnSiteJob = () => {
        const fitteredJobs = loadedDatas.filter(job => job.job_category === 'On-Site Jobs');
        setFilteredDatas(fitteredJobs);
    }

    const handleRemoteJob = () => {
        const fitteredJobs = loadedDatas.filter(job => job.job_category === 'Remote Jobs');
        setFilteredDatas(fitteredJobs);
    }

    const handleHybridJob = () => {
        const fitteredJobs = loadedDatas.filter(job => job.job_category === 'Hybrid Jobs');
        setFilteredDatas(fitteredJobs);
    }

    const handlePartTimeJob = () => {
        const fitteredJobs = loadedDatas.filter(job => job.job_category === 'Part-Time Jobs');
        setFilteredDatas(fitteredJobs);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const PDFDocument = () => (
        <Document>
            <Page size="A4">
                {
                    filteredDatas.map(job => <View key={job._id}>
                        <Text className='text-2xl font-bold text-black'>- {job.job_title}</Text>
                        <Text className='font-bold text-black'>{job.deadline_date} - Deadline</Text>
                        <Text className='font-bold text-black'>${job.salary}</Text>
                        <Text className='font-bold text-black'>{job.job_category}</Text>
                        <Text className='font-bold text-black py-4'>--------------------------------------------------</Text>
                    </View>
                )}
            </Page>
            
        </Document>
      );

      const DownloadButton = () => (
        <PDFDownloadLink document={<PDFDocument />} fileName="applied-jobs.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      );

    return (
        <div className="mt-10 w-full lg:w-[1000px] xl:w-[1300px] mx-auto">
            <div>
                <h2 className="text-4xl text-sky-500 font-bold text-center">Your Applied Jobs</h2>
                <div className="border-t-2 border-sky-600 w-[300px] mx-auto mt-2 mb-4"></div>
            </div>
            <div className='flex items-center gap-3 justify-center mb-4'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-sky-500 hover:bg-sky-500 rounded text-black font-bold flex items-center">Select Category<FaAngleDown className='text-lg'></FaAngleDown> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 rounded border-2 border-sky-500 font-bold">
                        <li><a onClick={handleAllJob}>All Jobs</a></li>
                        <div className='border-t-2 border-sky-400 my-1'></div>
                        <li><a onClick={handleOnSiteJob}>On-Site Jobs</a></li>
                        <div className='border-t-2 border-sky-400 my-1'></div>
                        <li><a onClick={handleRemoteJob}>Remote Jobs</a></li>
                        <div className='border-t-2 border-sky-400 my-1'></div>
                        <li><a onClick={handleHybridJob}>Hybrid Jobs</a></li>
                        <div className='border-t-2 border-sky-400 my-1'></div>
                        <li><a onClick={handlePartTimeJob}>Part-Time Jobs</a></li>
                    </ul>
                </div>
                <button className='btn bg-yellow-400 hover:bg-yellow-300 rounded text-black font-bold'><DownloadButton/></button>
            </div>
            { loading ? (<div className='w-fit my-20 mx-auto'><Grid height={50} width={50} color={'#7DD3FC'} loading={loading} size={30}></Grid></div>) : (<div className="overflow-x-auto border-b-2 border-sky-500">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="border-b-2 border-sky-500">
                        <th>Photo</th>
                        <th>Job Title</th>
                        <th>Job Category</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                    { loadedDatas.length === 0 ? <></> : <tbody>
                        {
                            filteredDatas.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>)
                        }
                    </tbody>}
                </table>
                {loadedDatas.length === 0 ? <h2 className='text-4xl text-red-500 font-bold text-center my-8'>You haven't applied any jobs yet :(</h2> : <></>}
            </div>)}
        </div>
    );
};

export default AppliedJobs;