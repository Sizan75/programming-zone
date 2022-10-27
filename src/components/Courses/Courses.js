import {useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    const courses= useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-4   '>
          <div className='hidden lg:block'> <LeftSideNav></LeftSideNav> </div>
            <div className='col-span-3'>
            <div className='grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 gap-4'>
            {courses.map(course =><Course key={course._id}
            course={course}
            ></Course>)}
        </div>
            </div>
        </div>
    );
};

export default Courses;
