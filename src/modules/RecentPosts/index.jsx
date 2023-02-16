import React from 'react'
import PostCard from '../../components/PostCard'
import { navigate } from 'gatsby-link'

function RecentPosts(props){
    return (
        <div className='w-full bg-blue-50'>
            <div className='container m-auto flex flex-col items-start '>
                <div className='flex justify-between m-auto w-full text-left pt-5'>
                    <span className='text-2xl'>Recent posts</span>
                    <navigate to='/' className='font-semibold text-blue-600'>View all</navigate>
                    
                </div>
                <div className='flex flex-col w-full lg:flex-row gap-5 py-5 justify-center'>
                    <PostCard title={props.title} date={props.date} labels={props.labels} text={props.text}></PostCard>
                    <PostCard title={props.title} date={props.date} labels={props.labels} text={props.text}></PostCard>
                    <PostCard title={props.title} date={props.date} labels={props.labels} text={props.text}></PostCard>
                </div>
            </div>
        </div>


    )
}

export default RecentPosts