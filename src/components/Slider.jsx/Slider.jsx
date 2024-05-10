"use client";
import { Carousel } from "flowbite-react";
import slider1 from '../../../public/img/slider1.jpg'
import slider2 from '../../../public/img/slider2.jpg'
import slider3 from '../../../public/img/slider3.jpg'
import slider4 from '../../../public/img/slider4.jpg'

const Slider = () => {
    return (
        <div className="h-[500px]">
            <Carousel className="border-2 rounded-lg border-black">
                <div className="flex h-full items-center justify-center ">
                    <div className="relative w-full h-full">
                        <img className="w-[1300px] h-[500px] object-cover" src={slider1} alt="" />
                        <div className="bg-[#00000066] absolute top-0 bottom-0 my-auto h-fit w-full text-center">
                            <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-white py-3">On-Site Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center ">
                    <div className="relative w-full h-full">
                        <img className="w-[1300px] h-[500px] object-cover" src={slider2} alt="" />
                        <div className="bg-[#00000066] absolute top-0 bottom-0 my-auto h-fit w-full text-center">
                            <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-white py-3">Remote Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center ">
                    <div className="relative w-full h-full">
                        <img className="w-[1300px] h-[500px] object-cover" src={slider3} alt="" />
                        <div className="bg-[#00000066] absolute top-0 bottom-0 my-auto h-fit w-full text-center">
                            <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-white py-3">Hybrid Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center ">
                    <div className="relative w-full h-full">
                        <img className="w-[1300px] h-[500px] object-cover" src={slider4} alt="" />
                        <div className="bg-[#00000066] absolute top-0 bottom-0 my-auto h-fit w-full text-center">
                            <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-white py-3">Part-Time Jobs</h2>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;