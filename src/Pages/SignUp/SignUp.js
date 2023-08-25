
import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {

const{createUser,auth} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        
        createUser(email,password)
        .then(result =>{
           const user = result.user;
           console.log(user)
           alert('Register Sucessful')
           form.reset();
           verifyEmail();

           
        })

        .catch(err =>{
            console.error(err);
        })

    }

const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
        alert('Please Verifying your email')
    })
}
   



    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                    <h1 className="text-5xl font-bold text-center">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-bold" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;