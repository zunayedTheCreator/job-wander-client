import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWeb from '../Shared/NavbarWeb/NavbarWeb';
import FooterWeb from '../Shared/FooterWeb/FooterWeb';

const Root = () => {
    return (
        <div className='h-full'>
            <NavbarWeb></NavbarWeb>
            <div className='h-full'>
                <Outlet></Outlet>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default Root;