import React, { useContext } from 'react';
import Lottie from 'lottie-react'
import study from '../../assets/60169-study-online.json'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Head = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Hi, {user?.displayName ? user?.displayName : 'user'}
                <br className="hidden md:block" />
                Let's {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Start Learning Now.
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Learn programming language from the experts.And get job quickly.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>

            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <Lottie animationData={study} loop={true} />
        </div>
      </div>
    );
};

export default Head;