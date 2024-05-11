import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="relative w-full bg-center">
            <div className='absolute z-10 w-full flex justify-center top-16'>
                <form className='p-4 w-[340px] md:w-[400px] bg-white py-8 rounded border-2 border-sky-400 drop-shadow-xl'>
                    <h2 className='text-5xl font-bold text-sky-500 text-center mb-5'>Register</h2>
                    <input required type="text" placeholder="Your Name" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required type="email" placeholder="Your Email" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required type="password" placeholder="Enter Password" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required type="text" placeholder="Photo URL" className="input input-bordered w-full rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <div className='text-center mb-4'>
                        <button className='btn w-full rounded bg-sky-500 hover:bg-sky-400 mt-3 text-black font-bold'>Register</button>
                    </div>

                    <div className='border-t-2 border-sky-700 mb-2'></div>
                    <h4 className='text-black font-bold text-center mb-1'>Already a member? <Link to={'/login'}><span className='font-extrabold text-sky-600'>Login Now</span></Link></h4>
                </form>
            </div>
        </div>
    );
};

export default Register;