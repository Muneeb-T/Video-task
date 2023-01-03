import React from 'react';
import { BsCameraVideo } from 'react-icons/bs';
const Logo = () => {
    return (
        <div className='flex items-center space-x-3'>
            <BsCameraVideo size={45} className='text-red-500' />
            <p className='text-3xl font-bold text-gray-400'>Vidstate</p>
        </div>
    );
};

export default Logo;
