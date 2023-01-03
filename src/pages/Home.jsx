import React from 'react';
import { Link } from 'react-router-dom';
import videos from '../data/data.json';
const Home = () => {
    return (
        <div className='container mx-auto p-10'>
            <div className='text-gray-300 space-y-3'>
                {videos.map((video, index) => {
                    return (
                        <Link
                            to={`/${video.id}`}
                            className='grid grid-cols-3 gap-3 hover:border duration-200 border-gray-500 rounded cursor-pointer hover:scale-95'
                            key={video.id}>
                            <div>
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className='w-full'
                                />
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <div className='space-y-3'>
                                    <p className='text-2xl text-gray-300'>
                                        {video.title}
                                    </p>
                                    <p className='text-xl text-gray-400'>
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
