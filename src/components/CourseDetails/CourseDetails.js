import React from 'react';
import { FaGlobe, FaStar } from 'react-icons/fa';
import { FcConferenceCall, FcDownload, FcReadingEbook } from 'react-icons/fc';
import { Link, useLoaderData } from 'react-router-dom';

import ReactToPdf from "react-to-pdf";



const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, name, picture, instructor, price, total_student, rating, duration, total_reviewed, language, total_lesson, } = course


    const ref = React.createRef();
    
    return (
        <div>
            <div className='flex justify-around'>
                <h2 className='text-4xl font-bold text-blue-600'>Course Details</h2>
            <div>
<ReactToPdf targetRef={ref} filename="course-details.pdf"    >
        {({toPdf}) => (
            <button onClick={toPdf}>< FcDownload className="text-4xl"/></button>
        )}
    </ReactToPdf>
    </div>    

            </div>
        <div  className='flex align-center justify-center'>
                <div ref={ref} className="max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/checkout/${_id}`}>
                        <img className="rounded-t-lg" src={picture} alt="" />
                    </Link>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl flex font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                        <p className="mb-3 font-semibold text-xl text-gray-700 dark:text-gray-400 flex">Instructor:{instructor}</p>
                        <p className="mb-3 font-semibold text-xl text-gray-700 dark:text-gray-400 flex">Instructor:{duration}hours of video</p>
                        <div className='flex justify-between text-xl '>
                            <p className="mb-3 flex  font-semibold  text-gray-700 dark:text-gray-400">Rating:<FaStar className='text-orange-500'></FaStar> {rating}</p>
                            <p className="mb-3 font-semibold flex gap-4 text-gray-700 dark:text-gray-400">({total_reviewed})</p>
                        </div>
                        <div className='flex justify-between text-xl'>
                            <div>
                                <h4 className='flex'><FcConferenceCall></FcConferenceCall>{total_student}</h4>
                                <h4 className='flex'><FcReadingEbook ></FcReadingEbook>{total_lesson}</h4>
                            </div>
                            <h4 className='flex'><FaGlobe></FaGlobe>{language}</h4>
                        </div>
                        <h5 className='font-bold text-lg flex'>price: ${price}</h5>
                        <Link className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none" to={`/checkout/${_id}`}>
                            Get premium access.
                        </Link>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default CourseDetails;