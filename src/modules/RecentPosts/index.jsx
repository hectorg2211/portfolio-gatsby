import React from 'react'
import PostCard from '../../components/PostCard'

function RecentPosts(props){
    return (
        <div className='container m-auto flex flex-col items-start bg-blue-50'>
            <div className='flex m-auto w-full text-left'>
                <h6>Recent posts</h6>
            </div>
            <div className='flex flex-row w-full max-w-4xl gap-10 m-auto p-5 justify-center flex-wrap'>
                <PostCard title={props.title} date={props.date} labels={props.labels} text={props.text}></PostCard>
                <PostCard title={props.title} date={props.date} labels={props.labels} text={props.text}></PostCard>
            </div>
        </div>

        
    )
}

export default RecentPosts