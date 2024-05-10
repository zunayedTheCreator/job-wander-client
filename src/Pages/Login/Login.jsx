import bg from '../../../public/vid/login-bg.mp4'
const Login = () => {
    return (
        <div className="relative w-full h-full">
            <video autoPlay muted loop id="myVideo" className='object-cover bottom-0 right-0 fixed w-[7000px] h-full top-[66px]'>
                <source src={bg} type="video/mp4"/>
            </video>
            <div className='w-full h-full fixed bg-[#00000066] top-[66px]'></div>
        </div>
    );
};

export default Login;