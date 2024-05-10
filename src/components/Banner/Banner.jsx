import img from '../../../public/img/banner.svg'

const Banner = () => {
    return (
        <div className='mt-8 relative'>
            <img className='object-cover w-full lg:w-[1250px] h-[550px] bg-sky-500 mx-auto rounded' src={img} alt="" />
            <div className='absolute top-0'>
                <div>
                    <h2 className='font-bold text-5xl md:text-[75px] lg:text-[85px] text-black'>Job<span className='text-white'>Wander</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;