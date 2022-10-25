import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses= useLoaderData();
    console.log(courses)
    return (
        <div className='grid grid-cols-4 gap-4  '>
            <div className=''>

            </div>
            <div className='col-span-3'>
            <div className='grid grid-cols-2 gap-4'>
            {courses.map(course =><Course key={course._id}
            course={course}
            ></Course>)}
        </div>
            </div>
        </div>
    );
};

export default Courses;
