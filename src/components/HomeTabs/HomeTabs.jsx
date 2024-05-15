import React from 'react';
import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import TabsCard from "./TabsCard";
import { Grid } from 'react-loader-spinner';


const HomeTabs = () => {

    const [loading, setLoading] = useState(true);

    const [allJobs, setAllJobs] = useState([]);
    const [onSiteJobs, setOnSiteJobs] = useState([]);
    const [remoteJobs, setRemoteJobs] = useState([]);
    const [hybridJobs, setHybridJobs] = useState([]);
    const [partTimeJobs, setPartTimeJobs] = useState([]);

    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/job`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setAllJobs(data)
            setLoading(false)
        })
    }, []);
    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/job/On-Site%20Jobs`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setOnSiteJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/job/Remote%20Jobs`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setRemoteJobs(data)        })
    }, []);
    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/job/Hybrid%20Jobs`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setHybridJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`https://job-wander-server.vercel.app/job/Part-Time%20Jobs`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setPartTimeJobs(data)
        })
    }, []);

    return (
        <Tabs aria-label="Tabs with underline" style="underline" className='border-b-2 border-sky-600 pb-4'>
            <Tabs.Item active title="All Jobs">
                { loading ? (<div className='w-fit my-20 mx-auto'><Grid height={50} width={50} color={'#7DD3FC'} loading={loading} size={30}></Grid></div>) : (<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-0 lg:px-[150px] xl:px-12">
                    {
                        allJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>)}
            </Tabs.Item>
            <Tabs.Item title="On-Site Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[150px] xl:px-12">
                    {
                        onSiteJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Remote Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[150px] xl:px-12">
                    {
                        remoteJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Hybrid Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[150px] xl:px-12">
                    {
                        hybridJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Part-Time Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[150px] xl:px-12">
                    {
                        partTimeJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
        </Tabs>
    );
};

export default HomeTabs;