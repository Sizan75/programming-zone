import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    
    const [courses, setCourses]= useState([])
    
    useEffect(() =>{
        fetch('https://programming-learning-zone-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    return (
        <div className=''>
        <h3 className='text-xl'>Courses</h3>
        {
            courses.map(course => 
                <ul key={course._id} className="menu bg-base-100  sm:w-56 ">
                <li><Link to={`/courses/${course._id}`} >{course.name}</Link></li>
              </ul>
            
            )
        }
        </div>
    );
};

export default LeftSideNav;