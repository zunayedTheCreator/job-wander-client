import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        
        createUser(email, password)
        .then(result => {
                const user = result.user;
                console.log(user);
            
                const newUser = {name, email, password, photo}
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Successfully Registered",
                            icon: "success"
                          });
                        const existedUser = localStorage.getItem('signedUser');
                        if (!existedUser) {
                            const signedUser = JSON.stringify(newUser)
                            localStorage.setItem('signedUser', signedUser)
                        }
                        else{
                            Swal.fire({
                                title: "Already Logged In",
                                icon: "error"
                              });
                        }
                    }
                })
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="relative w-full bg-center">
            <div className='absolute z-10 w-full flex justify-center top-16'>
                <form onSubmit={handleCreateUser} className='p-4 w-[340px] md:w-[400px] bg-white py-8 rounded border-2 border-sky-400 drop-shadow-xl'>
                    <h2 className='text-5xl font-bold text-sky-500 text-center mb-5'>Register</h2>
                    <input required name='name' type="text" placeholder="Your Name" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required name='email' type="email" placeholder="Your Email" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required name='password' type="password" placeholder="Enter Password" className="input input-bordered w-full mb-3 rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <input required name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full rounded border-2 border-sky-600 font-bold text-black bg-white" />
                    <div className='text-center mb-4'>
                        <button className='btn w-full rounded bg-sky-500 hover:bg-sky-400 mt-3 text-black font-bold'>Register</button>
                    </div>

                    <div className='border-t-2 border-sky-700 mb-2'></div>
                    <h4 className='text-black font-bold text-center mb-1'>Already a member? <Link to={'/login'}><span className='font-extrabold text-sky-600'>Login Now</span></Link></h4>
                </form>
            </div>
        </div>
    );
};

export default Register;