import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {picture,name, _id, duration,rating,price}=course

    return (
        <div className="card mt-5 card-compact w-96  shadow-xl">
        <figure className='bg-slate-700'><img className='h-56 ' src={picture} alt="course" /></figure>
        <div className="card-body bg-green-100  text-dark">
          <h2 className="card-title">{name}</h2>
          <p className='flex'>Total hour of video:{duration}</p>
          <p className='flex'>rating:{rating}</p>
          <h5 className='flex font-bold text-lg m-0'>price: ${price}</h5>
          <div className="card-actions justify-end">
            <Link to={`/courses/${_id}`} className="btn btn-success text-dark"> More Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Course;