import React from 'react';
import banner from  '../../../public/img/job-banner.jpg'
const UpComing = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-5xl font-bold text-sky-500 text-center mb-8'>Coming Soon</h2>
            <div className='px-16 flex flex-col lg:flex-row gap-6 items-center justify-center'>
                <img className='h-[500px] w-[400px] object-cover rounded-md' src={banner} alt="" />
                <div>
                    <h2 className='text-4xl font-bold mb-3'>Be a Librarian!</h2>
                    <p className='font-bold mb-2'>- Work in a library beside your study.</p>
                    <h2 className='font-bold text-xl mb-1'>Part-Time Job</h2>
                    <h2 className='font-bold text-xl mb-1'>Posting on - 06/15/24</h2>
                    <h2 className='font-bold text-xl mb-3'>$6800</h2>
                    <button className='btn bg-sky-500 hover:bg-sky-400 rounded font-bold text-black'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default UpComing;