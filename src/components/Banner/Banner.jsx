import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import img from '../../../public/img/banner.svg'
import human from '../../../public/img/banner-human.png'
import SearchCard from './SearchCard';

const Banner = () => {

    const [searchJobs, setSearchJobs] = useState([]);

    const handleSearch = e => {
        e.preventDefault();
        const input = e.target.search.value;
        console.log(input);

        if (input === '') {
              setSearchJobs([])
        }
        else{
            fetch(`http://localhost:5000/job/${input}`)
            .then(res => res.json())
            .then(data => {
                setSearchJobs(data)
                e.target.search.value = '';
            })
        }
    }

    return (
        <div>
            <div className='mt-8 relative'>
                <img className='object-cover w-full h-[550px] bg-sky-500 mx-auto rounded' src={img} alt="" />
                <div className='absolute top-0 w-full flex items-center'>
                    <div className='w-full'>
                        <h2 className='font-bold text-5xl md:text-[75px] lg:text-[85px] text-black lg:ml-14 mt-16 md:mt-28 text-center lg:text-start mb-6'>Job<span className='text-white'>Wander</span></h2>
                        <p className='lg:ml-14 mx-auto lg:mx-0 text-center lg:text-start md:w-[700px] text-lg font-bold text-black'>Navigate your career path with JobWander—your gateway to diverse opportunities. Explore, connect, and thrive with personalized tools and resources, guiding you to your dream job effortlessly. Start your journey today!</p>
                        <form onSubmit={handleSearch} className='w-fit mx-auto lg:mx-0'>
                            <div className="label mt-14">
                                <span className="label-text-alt lg:ml-14 text-white font-bold">Search any job-</span>
                            </div>
                            <div className='bg-white w-fit py-1 px-3 gap-2 flex items-center border-2 rounded-md lg:ml-14'>
                                <input name='search' type="text" placeholder="Type here" className="input w-full max-w-xs no-outline rounded-none border font-bold bg-white" />
                                <button className='btn px-6 min-h-0 h-[46px] border-none bg-sky-400 hover:bg-sky-300'><FaSearch className='text-black'></FaSearch></button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-6 hidden lg:grid'>
                        <img className='w-[600px]' src={human} alt="" />
                    </div>
                </div>
            </div>
            { searchJobs.length === 0 ? <></> : <div className='mb-6'>
                {
                    searchJobs.map(job => <SearchCard key={job._id} job={job}></SearchCard>)
                }
            </div>}
        </div>
    );
};

export default Banner;