import { FaSearch } from 'react-icons/fa';
import img from '../../../public/img/banner.svg'
import human from '../../../public/img/banner-human.png'
const Banner = () => {
    return (
        <div className='mt-8 relative'>
            <img className='object-cover w-full lg:w-[1250px] h-[550px] bg-sky-500 mx-auto rounded' src={img} alt="" />
            <div className='absolute top-0 w-full flex items-center'>
                <div className='w-full'>
                    <h2 className='font-bold text-5xl md:text-[75px] lg:text-[85px] text-black lg:ml-14 mt-16 md:mt-28 text-center lg:text-start mb-6'>Job<span className='text-white'>Wander</span></h2>
                    <p className='lg:ml-14 mx-auto lg:mx-0 text-center lg:text-start md:w-[700px] text-lg font-bold text-black'>Navigate your career path with JobWander—your gateway to diverse opportunities. Explore, connect, and thrive with personalized tools and resources, guiding you to your dream job effortlessly. Start your journey today!</p>
                    <form className='w-fit mx-auto lg:mx-0'>
                        <div className='bg-white w-fit py-1 px-3 gap-2 flex items-center border-2 rounded-md lg:ml-14 mt-14'>
                            <input type="text" placeholder="Type here" className="input w-full max-w-xs no-outline rounded-none border text-black font-bold bg-white" />
                            <button className='btn px-6 min-h-0 h-[46px] border-none bg-sky-400 hover:bg-sky-300'><FaSearch className='text-black'></FaSearch></button>
                        </div>
                        <div className="label">
                            <span className="label-text-alt lg:ml-14 text-white font-bold"><span className='font-extrabold'>Search:</span> On-Site Job, Remote Job, Hybrid, Part-Time</span>
                        </div>
                    </form>
                </div>
                <div className='mt-6 hidden lg:grid'>
                    <img className='w-[600px]' src={human} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;