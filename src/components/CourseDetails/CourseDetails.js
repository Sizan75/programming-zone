import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course= useLoaderData();
    const {_id,name}=course
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default CourseDetails;