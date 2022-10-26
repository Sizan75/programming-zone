import React, { useContext } from 'react';
import Lottie from 'lottie-react'
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import login from '../../assets/login.json'
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { createUser, singInGoogle, singInGithub, updateUserprofile } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, photoURL, displayName)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleupdateUserprofile(displayName, photoURL)
                form.reset();
            })
            .catch(error => console.error(error))

    }
    const handleGoogleSignIn = () => {
        singInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        singInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleupdateUserprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserprofile(profile)
            .then(() => {
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit} className="card-body">
                        <h4 className="text-2xl font-semibold">Register now!</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='displayName' type="text" placeholder="full name here" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Photo Url" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
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
                            <button className="btn btn-success">Register</button>
                            <label className="label">
                                <p><small>Already have an account?</small>
                                    <Link to="/login" className="text-purple-700 link link-hover">Log In</Link>
                                </p>
                            </label>
                        </div>
                    </Form>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success mt-1 text-dark"><FcGoogle></FcGoogle>  Google Sign In</button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-info mt-5"><FaGithubSquare></FaGithubSquare>  GitHub Sign In </button>
                </div>
                <div className='relative lg:w-1/4 '>
                    <div className="w-full lg:w-4/5 lg:ml-auto h-48 sm:w-2/5 sm:h-36 ">
                        <Lottie animationData={login} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;