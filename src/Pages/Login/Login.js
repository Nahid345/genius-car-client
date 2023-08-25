import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FaGoogle,FaFacebook,FaGithub } from "react-icons/fa6";


const Login = () => {

    const[userEmail, setUserEmail] =useState()
    const{userLogin,auth,googleSignIn,provider} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        
        userLogin(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            alert('Login Successful')
            form.reset()
          
        })
        .catch(err =>{
            console.log(err)
        })

    }


    const handleGoogleSignIn = () =>{
        googleSignIn(auth,provider)
        .then( (result)=>{
            const user = result.user;
            console.log(user)
            alert('google loggin sucessful')

        })
        .catch(err =>{
            console.error(err);
        })
    }

    const handleEmailBlur = (event)=>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);


    }



    const handleForgetPassword = () =>{
       sendPasswordResetEmail(auth,userEmail)
         .then( () =>{
            alert('Please check your email & reset your password')
         })
         .catch(err =>console.error(err))

    }


    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#"  onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-bold" type="submit" value="Login" />
                         
                        </div>
                    </form>
                    <p className='text-center'>New to Genius car <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link></p>
                    <div className='flex items-center justify-center my-4'>
                        <FaGoogle onClick={handleGoogleSignIn} className='text-2xl font-bold text-blue-700 mx-2 '></FaGoogle>
                        <FaFacebook className='text-2xl font-bold text-blue-700 mx-2'></FaFacebook>
                        <FaGithub className='text-2xl font-bold text-black-700 mx-2'></FaGithub>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Login;