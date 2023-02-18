import React from 'react'
import PostCard from '../../components/PostCard'

function RecentPosts({posts}){
    return (
        <div className='w-full bg-blue-50'>
            <div className='container px-4 md:px-0 m-auto flex flex-col items-start '>
                <div className='flex justify-between m-auto w-full text-left pt-5'>
                    <span className='text-2xl'>Recent posts</span>
                    <a href='/' className='font-semibold text-blue-600'>View all</a>
                    
                </div>
                <div className='flex flex-col w-full lg:flex-row gap-5 py-5 justify-center'>
                    {posts.map((post) => (
                        <PostCard key={post.id} title={post.title} date={post.date} labels={post.labels} text={post.text}></PostCard>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default RecentPosts