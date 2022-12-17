import React from 'react';
import { Bars } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
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
  );
};

export default Loader;