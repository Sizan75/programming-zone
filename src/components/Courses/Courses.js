import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses= useLoaderData();
    console.log(courses)
    return (
        <div className='grid grid-cols-4 gap-4  '>
            <div >
            <h3 className='text-xl'>Courses</h3>
            {
                courses.map(course => 
                    <ul className="menu bg-base-100  w-56">
                    <li><Link to={`/courses/${course._id}`}>{course.name}</Link></li>
                  </ul>
                
                )
            }
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
