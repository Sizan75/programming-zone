import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course= useLoaderData();
    const {_id,name}=course
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{name}</h1>
            <Link to={`/checkout/${_id}`}>Checkout</Link>
        </div>
    );
};

export default CourseDetails;