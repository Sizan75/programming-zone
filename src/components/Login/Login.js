import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import Lottie from 'lottie-react'
import login21 from '../../assets/login21.json'
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const navigate= useNavigate()
    const location= useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    const { userLogIn, singInGoogle, singInGithub } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
                form.reset()
                setError('')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        singInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        singInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit} className="card-body">
                        <h4 className="text-2xl font-semibold">Log In!</h4>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered input-success w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered input-success w-full max-w-xs" required />
                        </div>
                        <div className="form-control mt-5">
                            <button className="btn btn-success">Login</button>
                            <label className="label">
                                <p><small>Not Register yet?</small>
                                    <Link to="/register" className="text-purple-800 link link-hover">Register</Link>
                                </p>
                               
                            </label>
                            <label className='label text-red-500'>
                            <small>{error}</small>
                            </label>
                        </div>
                    </Form>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success mt-1 text-dark"><FcGoogle></FcGoogle>  Google Sign In</button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-info mt-5"><FaGithubSquare></FaGithubSquare>  GitHub Sign In </button>
                </div>
                <div className='relative lg:w-1/2 '>
                    <div className="w-full lg:w-4/5 mb-5 lg:ml-auto h-80  sm:h-36 ">
                        <Lottie animationData={login21} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;