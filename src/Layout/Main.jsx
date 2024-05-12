import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import FooterWeb from '../Shared/FooterWeb/FooterWeb';

const Main = () => {
    return (
        <div className='h-full'>
            <Navbar></Navbar>
            <div className='h-full'>
                <Outlet></Outlet>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default Main;