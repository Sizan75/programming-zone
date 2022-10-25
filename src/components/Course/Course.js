import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {picture,name, _id, duration,rating,price}=course

    return (
        <div className="card mt-5 card-compact w-96  shadow-xl">
        <figure className='bg-slate-700'><img className='h-56 ' src={picture} alt="course" /></figure>
        <div className="card-body bg-green-100  text-dark">
          <h2 className="card-title">{name}</h2>
          <p className=''>{duration}</p>
          <h5 className='font-semibold'>${price}</h5>
          <div className="card-actions justify-end">
            <button  className="btn btn-success text-dark"><Link to={`/${_id}`}>More Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Course;