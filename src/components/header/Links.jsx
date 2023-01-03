import React from 'react';

const Links = () => {
    return (
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
    );
};

export default Links;
