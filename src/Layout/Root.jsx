import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWeb from '../Shared/NavbarWeb/NavbarWeb';
import FooterWeb from '../Shared/FooterWeb/FooterWeb';

const Root = () => {
    return (
        <div>
            <NavbarWeb></NavbarWeb>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default Root;