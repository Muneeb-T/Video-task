import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Links from './Links';
import Logo from './Logo';
import Search from './Search';
const Header = () => {
    return (
        <div className='bg-gray-400 bg-opacity-30'>
            <div className='container mx-auto h-[10vh] flex items-center justify-between'>
                <div>
                    <Logo />
                </div>
                <div className='hidden lg:block'>
                    <Links />
                </div>
                <div className='flex space-x-20 items-center'>
                    <Search />
                    <div>
                        <FaUserCircle size={30} className='text-gray-300' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
