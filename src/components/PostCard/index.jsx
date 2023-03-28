import React from 'react'
import { isoToReadableDate } from '../../utils/iso-to-normal-date'
import { PortableText } from '@portabletext/react'
import { Link } from 'gatsby'

function PostCard({ post }) {
  return (
    <div className='flex flex-col gap-5 m-auto p-5 rounded bg-white'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-dark hover:text-primary transition-all'><Link
        to={`/blog/${post.slug.current}`}
        className='rounded-lg overflow-hidden sm:flex-[1_1_0%]'>{post.title}
      </Link></h2>

      <div className='flex flex-row w-full m-auto gap-3'>
        <p>{isoToReadableDate(post._updatedAt)}</p>
        <p> | </p>
        <p>{post.labels.join(', ')}</p>
      </div>
      <div>
        <p className='text-dark'>{post.excerpt}</p>
      </div>
    </div>
  )
}

export default PostCard