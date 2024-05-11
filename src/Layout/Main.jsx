import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='h-full'>
            <Navbar></Navbar>
            <div className='h-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;