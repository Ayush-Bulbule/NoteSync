import React from 'react'

const Card = () => {
    return (
        <div className="note-card bg-white rounded-lg shadow-md p-4">
            <div className="category flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>Frontend</span>
            </div>
            <div className="note-title mt-2">
                <h2 className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</h2>
            </div>
            <div className="note-body mt-2">
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
            </div>

            <hr className='my-3' />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/user.png" alt="user.png" className='h-8 w-8 rounded-full' />
                    <span className='text-gray-600 text-sm'>John Doe</span>
                </div>
                <div className="flex items-center gap-2 py-3">
                    <span className='text-gray-600 text-sm'>12:00 PM</span>
                    <span className='text-gray-600 text-sm'>12/23</span>
                </div>
            </div>
        </div>
    )
}

export default Card