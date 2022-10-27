import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const CheckOut = () => {
    const course = useLoaderData();
    const { name, price, duration, instructor } = course;
    const { user } = useContext(AuthContext);

    const handleSubmit = () => {
        toast.success('Purchase Successfully!! Thanks!');
    }
    return (
        <div>

            <h3 className='font-bold  text-4xl'>Buy Now & Start Learning</h3>
            <div className="relative w-full h-full">
                <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                        <div>
                            <h2 className='font-bold text-2xl text-blue-600'>Hi,{user.displayName}, </h2>
                            <br /> <h2 className='font-medium text-lg'> you r going to buy <span className='font-semibold text-blue-800'>{name}</span> course </h2> <br />
                            <h2 className='font-medium text-lg'> by {instructor}</h2>

                            
                    </div>

                    <div>
                        <div className="p-8 bg-gray-900 rounded">
                            <div className="mb-4 text-center">
                                <p className="text-xl font-medium tracking-wide text-white">
                                    {name}
                                </p>
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        ${price}
                                    </p>
                                    <p className="text-lg text-gray-500"></p>
                                </div>
                            </div>
                            <ul className="mb-8 space-y-2">
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">All downloadable resource</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">{duration} hours on-demand video</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Full lifetime access</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Access on mobile & Destop </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Certificate of completion</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
                                Buy Now
                            </button>
                            <Toaster position="top-center"
                                reverseOrder={false} />
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default CheckOut;