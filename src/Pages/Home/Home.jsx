import React from 'react';
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider.jsx/Slider";
import HomeTabs from '../../components/HomeTabs/HomeTabs';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <div className="mx-0 md:mx-6 xl:mx-0 mt-6 mb-8">
                <HomeTabs></HomeTabs>
            </div>
            <Slider></Slider>
        </div>
    );
};

export default Home;