import React from 'react';
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider.jsx/Slider";
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import { motion, useScroll } from "framer-motion";
import UpComing from '../../components/UpComing/UpComing';

const Home = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div style={{ scaleX: scrollYProgress }} className="max-w-7xl mx-auto">
            <Banner></Banner>
            <div className="mx-0 md:mx-6 xl:mx-0 mt-6 mb-8 progress-bar">
                <HomeTabs></HomeTabs>
            </div>
            <Slider></Slider>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;