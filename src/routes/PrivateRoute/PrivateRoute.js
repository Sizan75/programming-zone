import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({Children}) => {
   const {user,loading} = useContext(AuthContext)
   const location = useLocation();
    if(loading){
        return  <div>Loading</div>
    }
   if(!user){
    return <Navigate to='/' state={{from: location}} replace></Navigate>
   }
   return Children;
};

export default PrivateRoutes;