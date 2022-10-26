import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import { Bars } from 'react-loader-spinner'


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return <div className='flex justify-center items-center w-full min-h-screen'>
      <Bars
        height="80"
        width="80"
        color="#0000FF"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoutes;