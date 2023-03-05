import React from 'react'
import { isoToReadableDate } from '../../utils/iso-to-normal-date'
import {PortableText} from '@portabletext/react'


function PostCard({ post }) {
  return (
    <div className='flex flex-col gap-5 m-auto p-5 rounded bg-white'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-dark hover:text-primary transition-all'><a href='/'>{post.title}</a></h2>
      <div className='flex flex-row w-full m-auto gap-3'>
        <p>{isoToReadableDate(post._updatedAt)}</p>
        <p> | </p>
        <p>{post.labels.join(', ')}</p>
      </div>
      <div>
        <p className='text-dark'>{post.text}</p>
        <PortableText
          value={post._rawContent}
        />
      </div>
    </div>
  )
}

export default PostCard