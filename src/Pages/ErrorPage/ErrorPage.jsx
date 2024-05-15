import React from 'react';
import img from '../../../public/img/error.png'
import { Link } from 'react-router-dom';
import MyDynamicTitle from '../../MyDynamicTitle';

const ErrorPage = () => {
    MyDynamicTitle('Error | 404')
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-14 w-full lg:w-[1000px] xl:w-[1300px] mx-auto mt-16 mb-16'>
            <div>
                <h2 className='text-sky-500 text-5xl lg:text-6xl font-bold mb-2 text-center lg:text-left'>OH Hello!!!</h2>
                <h4 className='text-base lg:text-lg font-bold text-red-600 mb-4 text-center lg:text-left'>Looks like you are lost in a unknown page.</h4>
                <div className='text-center lg:text-left'>
                    <Link><button className='btn bg-sky-500 hover:bg-sky-400 rounded px-6 font-bold text-black'>Go Back</button></Link>
                </div>
            </div>
            <img className='lg:w-[500px] xl:w-[700px]' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;