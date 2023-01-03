import React from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <div className='bg-gray-400 bg-opacity-30'>
            <div className='container mx-auto h-[10vh] flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <BsCameraVideo size={45} className='text-red-500' />
                    <p className='text-3xl font-bold text-gray-400'>Vidstate</p>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex text-gray-300 text-xl gap-6'>
                        <li className='text-red-500'>
                            <button className='font-bold'>Home </button>
                        </li>
                        <li>
                            <button>About us </button>
                        </li>
                        <li>
                            <button>Contact us</button>
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-20 items-center'>
                    <div className='flex space-x-3 items-center relative'>
                        <input
                            type='text'
                            className='bg-transparent pb-1 text-lg outline-none text-gray-300 border-b border-gray-500'
                            placeholder='Search...'
                        />
                        <AiOutlineSearch
                            size={25}
                            className='text-gray-400 absolute right-0'
                        />
                    </div>
                    <div>
                        <FaUserCircle size={30} className='text-gray-300' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
