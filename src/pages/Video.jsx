import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/data.json';
import Youtube from 'react-youtube';
import { BiCommentDetail } from 'react-icons/bi';
import { IoSendSharp } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
const Video = () => {
    const { id: videoId } = useParams();
    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        setVideo({ ...videos.find((video) => video.id == videoId) });
    }, []);

    const saveComment = () => {
        if (comment) {
            setComments((prev) => [comment, ...prev]);
            setComment('');
        }
    };

    return (
        <div className='container mx-auto p-10 text-gray-300'>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col col-span-2 space-y-3'>
                    <Youtube
                        opts={{ width: '100%' }}
                        videoId={video.id}
                        loading='lazy'
                    />
                    <p className='text-gray-300 text-xl'>{video.title}</p>
                    <p className='text-gray-500'>{video.description}</p>
                </div>
                <div className='col bg-gray-3 gap-3'>
                    <div className='flex gap-3 items-center mb-3'>
                        <div>
                            <BiCommentDetail
                                className='text-gray-300'
                                size={30}
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                type='text'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='bg-transparent outline-none border-b text-lg pb-2  border-gray-500 w-full'
                                placeholder='Comment...'
                            />
                        </div>
                        <div>
                            <button
                                disabled={!comment.length}
                                type='submit'
                                className='bg-red-800 rounded-full p-3 text-gray-300 font-bold disabled:bg-gray-700 disabled:text-gray-500'
                                onClick={saveComment}>
                                <IoSendSharp size={20} />
                            </button>
                        </div>
                    </div>

                    <div>
                        {comments.length ? comments.map((comment) => {
                            return (
                                <div className='py-2 flex gap-2 items-center'>
                                    <FaUserCircle size={25} />
                                    <p className=''></p>
                                    {comment}
                                </div>
                            );
                        }) : (<div>

                            <p className='text-red-700'>No comments yet...</p>

                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
