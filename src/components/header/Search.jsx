import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Search = () => {
    return (
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
    );
};

export default Search;
