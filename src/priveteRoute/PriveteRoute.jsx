import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProbider'
import { Navigate } from 'react-router-dom';

function PriveteRoute({children}) {
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
  return <Navigate to="/login"></Navigate>
}

export default PriveteRoute