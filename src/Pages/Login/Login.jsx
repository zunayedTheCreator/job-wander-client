import { FaGithub, FaGoogle } from 'react-icons/fa';
import bg from '../../../public/vid/login-bg.mp4'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="relative w-full h-[800px]">
            <video autoPlay muted loop id="myVideo" className='w-full h-full absolute object-cover z-0'>
                <source src={bg} type="video/mp4"/>
            </video>
            <div className='w-full h-full absolute z-10 bg-[#00000066] top-0'></div>
            <div className='absolute z-10 w-full flex justify-center top-20'>
                <form className='p-4 w-[340px] md:w-[400px] bg-white py-8 rounded'>
                    <h2 className='text-5xl font-bold text-sky-500 text-center mb-5'>Login</h2>
                    <input required type="email" placeholder="Your Email" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required type="password" placeholder="Enter Password" className="input input-bordered w-full rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <div className='text-center'>
                        <button className='btn w-full rounded bg-sky-500 hover:bg-sky-400 mt-3 text-black font-bold'>Login</button>
                    </div>
                    <div className='w-fit mx-auto mt-4 mb-4'>
                        <h5 className='text-sky-700 font-bold text-center mb-1'>Or login with-</h5>
                        <div className='flex items-center gap-4'>
                            <button className='border-x-0 rounded-none btn border-y-2 border-sky-600 px-8 py-1 duration-200 hover:bg-sky-200 text-sky-500 hover:text-black bg-white'><FaGoogle className='text-3xl'></FaGoogle></button>
                            <button className='border-x-0 rounded-none btn border-y-2 border-sky-600 px-8 py-1 duration-200 hover:bg-sky-200 text-sky-500 hover:text-black bg-white'><FaGithub className='text-3xl'></FaGithub></button>
                        </div>
                    </div>
                    <div className='border-t-2 border-sky-700 mb-2'></div>
                    <h4 className='text-black font-bold text-center mb-1'>New here? <Link to={'/register'}><span className='font-extrabold text-sky-600'>Register Now</span></Link></h4>
                </form>
            </div>
        </div>
    );
};

export default Login;