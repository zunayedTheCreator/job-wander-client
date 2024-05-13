import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { RxSlash } from "react-icons/rx";

const NavbarWeb = () => {

    const user1 = localStorage.getItem('signedUser');
    const signedUser = JSON.parse(user1);
    const photo1 = signedUser?.photo;
    const name1 = signedUser?.name;
    
    const user2 = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(user2);
    const photo2 = loggedUser?.providerData[0]?.photoURL;
    const name2 = loggedUser?.providerData[0]?.displayName;

    const privateRoutes = <>
        <NavLink to={'/add-a-job'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>Add A Job</a></li></NavLink>
        <RxSlash className="text-lg mx-1"></RxSlash>
        <NavLink to={'/my-jobs'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>My Jobs</a></li></NavLink>
        <RxSlash className="text-lg mx-1"></RxSlash>
        <NavLink to={'/applied-jobs'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>Applied Jobs</a></li></NavLink>
    </>

    const navLinks = <>

        <NavLink to={'/'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>Home</a></li></NavLink>
        <RxSlash className="text-lg mx-1"></RxSlash>
        <NavLink to={'/all-jobs'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>All Jobs</a></li></NavLink>
        <RxSlash className="text-lg mx-1"></RxSlash>
        <NavLink to={'/blogs'} className={({ isActive, isPending }) =>
                      isActive
                        ? "rounded-xl bg-sky-500 text-black"
                        : isPending
                        ? "pending"
                        : ""
                    }><li><a>Blogs</a></li></NavLink>
        <RxSlash className="text-lg mx-1"></RxSlash>
        {
            user1 || user2 ? privateRoutes : <></>
        }
    </>

    const {signOutUser} = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        localStorage.removeItem('signedUser')
        localStorage.removeItem('loggedUser')
        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success"
        });
        setTimeout(() => { 
            location.reload()
        }, 2000);
    }

    return (
        <div className="navbar bg-base-100 md:px-6 border-b-2 drop-shadow-lg border-sky-600">
            <div className="navbar-start">
                <Link><a className="text-3xl font-bold">Job<span className='text-sky-500'>Wander</span></a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold items-center">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">

                { user1 || user2 ? (<div className="avatar">
                    <div className="w-10 rounded-full ring ring-sky-500 ring-offset-base-100 ring-offset-2 mr-2">
                      <img src={photo1 || photo2} />
                    </div>
                  </div>) : <></>}

                { user1 || user2 ? <button onClick={handleSignOut} className='btn rounded bg-red-600 font-bold px-6 text-lg text-black hover:bg-red-500'>SignOut</button> : <Link to={'/login'}><button className='btn rounded bg-sky-500 font-bold px-6 text-lg text-black hover:bg-sky-300'>Login</button></Link>}

                <label className="swap swap-rotate hidden lg:grid border-l-2 border-sky-600 pl-2 py-1">
                    <input type="checkbox" className="theme-controller hidden" value="dark" />
                    {/* sun icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    {/* moon icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
                <div>
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className='text-xl'></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-1 mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 gap-2 font-bold border-2">
                        {navLinks}
                        <div className='border-t-2 mx-3'></div>
                        <label className="swap swap-rotate lg:hidden justify-end mr-2">
                            <input type="checkbox" className="theme-controller hidden" value="dark" />
                            {/* sun icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            {/* moon icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        </label>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarWeb;