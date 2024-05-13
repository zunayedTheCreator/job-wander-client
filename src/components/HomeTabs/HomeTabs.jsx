import React from 'react';
import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import TabsCard from "./TabsCard";


const HomeTabs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [onSiteJobs, setOnSiteJobs] = useState([]);
    const [remoteJobs, setRemoteJobs] = useState([]);
    const [hybridJobs, setHybridJobs] = useState([]);
    const [partTimeJobs, setPartTimeJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/job')
        .then(res => res.json())
        .then(data => {
            setAllJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/job/On-Site%20Jobs`)
        .then(res => res.json())
        .then(data => {
            setOnSiteJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/job/Remote%20Jobs`)
        .then(res => res.json())
        .then(data => {
            setRemoteJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/job/Hybrid%20Jobs`)
        .then(res => res.json())
        .then(data => {
            setHybridJobs(data)
        })
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/job/Part-Time%20Jobs`)
        .then(res => res.json())
        .then(data => {
            setPartTimeJobs(data)
        })
    }, []);

    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="All Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[100px] xl:px-6">
                    {
                        allJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item active title="On-Site Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[100px] xl:px-6">
                    {
                        onSiteJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Remote Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[100px] xl:px-6">
                    {
                        remoteJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Hybrid Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[100px] xl:px-6">
                    {
                        hybridJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
            <Tabs.Item title="Part-Time Jobs">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-[100px] xl:px-6">
                    {
                        partTimeJobs.map(job => <TabsCard key={job._id} job={job}></TabsCard>)
                    }
                </div>
            </Tabs.Item>
        </Tabs>
    );
};

export default HomeTabs;