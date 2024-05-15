import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useContext } from 'react';
import Swal from 'sweetalert2'

const Login = () => {
    const user1 = localStorage.getItem('loggedUser');
    const user2 = localStorage.getItem('signedUser');
    const currentUser = user1 || user2;

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    if (!currentUser) {
        if (location.state !== null) {
            Swal.fire({
                title: "Please Login First 😉",
                icon: "error"
              });
        }
    }

    const {signInUser} = useContext(AuthContext);
    const {googleLogin} = useContext(AuthContext);
    const {githubLogin} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                const user = data[0];
                const existedUser = localStorage.getItem('signedUser');
                if (!existedUser) {
                    const signedUser = JSON.stringify(user)
                    localStorage.setItem('signedUser', signedUser)
                    Swal.fire({
                        title: "Logged In :)",
                        icon: "success"
                      });
                    if (user) {
                        navigate(location?.state ? location?.state : '/')
                    }
                }
                else{
                    Swal.fire({
                        title: "Already Logged In",
                        icon: "error"
                      });
                }
            })
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: "Something went wrong :(",
                icon: "error"
              });
        })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            const existedUser = localStorage.getItem('loggedUser')
            if (!existedUser) {
                const loggedUser = JSON.stringify(user);
                localStorage.setItem('loggedUser', loggedUser);
                if (user) {
                    navigate(location?.state ? location?.state : '/')
                }
            }
            else{
                Swal.fire({
                    title: "Already Logged In",
                    icon: "error"
                  });
            }
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: "Something went wrong :(",
                icon: "error"
              });
        })
    }
    
    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin = () => {
        githubLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            const existedUser = localStorage.getItem('loggedUser')
            if (!existedUser) {
                const loggedUser = JSON.stringify(user);
                localStorage.setItem('loggedUser', loggedUser);
                if (user) {
                    navigate('/')
                }
            }
            else{
                Swal.fire({
                    title: "Already Logged In",
                    icon: "error"
                  });
            }
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: "Something went wrong :(",
                icon: "error"
              });
        })
    }

    return (
        <div className="relative w-full h-[550px]">
            <div className='absolute z-10 w-full flex justify-center top-20'>
                <div className='p-4 w-[340px] md:w-[400px] bg-white py-8 rounded border-2 border-sky-400 drop-shadow-xl'>
                    <form onSubmit={handleLogin}>
                        <h2 className='text-5xl font-bold text-sky-500 text-center mb-5'>Login</h2>
                        <input required name='email' type="email" placeholder="Your Email" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                        <input required name='password' type="password" placeholder="Enter Password" className="input input-bordered w-full rounded border-2 border-sky-600 font-bold text-black bg-white" />
                        <div className='text-center'>
                            <button className='btn w-full rounded bg-sky-500 hover:bg-sky-400 mt-3 text-black font-bold'>Login</button>
                        </div>
                    </form>
                    <div className='w-fit mx-auto mt-4 mb-4'>
                        <h5 className='text-sky-700 font-bold text-center mb-1'>Or login with-</h5>
                        <div className='flex items-center gap-4'>
                            <button onClick={handleGoogleLogin} className='border-x-0 rounded-none btn border-y-2 border-sky-600 px-8 py-1 duration-200 hover:bg-sky-200 text-sky-500 hover:text-black bg-white'><FaGoogle className='text-3xl'></FaGoogle></button>
                            <button onClick={handleGithubLogin} className='border-x-0 rounded-none btn border-y-2 border-sky-600 px-8 py-1 duration-200 hover:bg-sky-200 text-sky-500 hover:text-black bg-white'><FaGithub className='text-3xl'></FaGithub></button>
                        </div>
                    </div>
                    <div className='border-t-2 border-sky-700 mb-2'></div>
                    <h4 className='text-black font-bold text-center mb-1'>New here? <Link to={'/register'}><span className='font-extrabold text-sky-600'>Register Now</span></Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;