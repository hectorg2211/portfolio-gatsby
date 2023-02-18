import React from 'react'

function PostCard({title, date, labels, text}) {
    return(
        <div className='flex flex-col gap-5 m-auto p-5 rounded bg-white'>
            <div>
                <h2 className='text-3xl font-semibold text-dark'> {title}</h2>
            </div>
            <div className='flex flex-row w-full m-auto gap-3'>
                <p>{date}</p>
                <p> | </p>
                <p>{labels}</p>
            </div>
            <div>
                <p className='text-dark'>{text}</p>
            </div>
        </div>
    )
}

export default PostCard