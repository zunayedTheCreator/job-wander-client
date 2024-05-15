import React from 'react';
"use client";
import { Footer } from "flowbite-react";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import logo from '../../../public/img/logo.png'

const FooterWeb = () => {

    return (
        <div>
            <Footer container className="p-0 mt-14">
                <div className="w-full bg-sky-800 text-white p-6">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] bg-[#ffffff66] p-1 rounded-md' src={logo} alt="" />
                        <h4 className="text-white font-bold text-4xl">Job<span className="text-sky-400">Wander</span></h4>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
                        <div>
                        <Footer.Title className="text-white font-bold" title="about" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className="text-white font-medium">Blog</Footer.Link>
                            <Footer.Link href="#" className="text-white font-medium">Jobs</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title className="text-white font-bold" title="Follow us" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className="text-white font-medium">Github</Footer.Link>
                            <Footer.Link href="#" className="text-white font-medium">Instagram</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title className="text-white font-bold" title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className="text-white font-medium">Privacy Policy</Footer.Link>
                            <Footer.Link href="#" className="text-white font-medium">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright className="text-white font-semibold" href="#" by="- All right reserved by Job Wander" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon className="text-white" href="#" icon={FaFacebook} />
                        <Footer.Icon className="text-white" href="#" icon={FaInstagram} />
                        <Footer.Icon className="text-white" href="#" icon={FaTwitter} />
                        <Footer.Icon className="text-white" href="#" icon={FaGithub} />
                        <Footer.Icon className="text-white" href="#" icon={FaDribbble} />
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterWeb;