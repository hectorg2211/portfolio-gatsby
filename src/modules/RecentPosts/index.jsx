import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import PostCard from '../../components/PostCard'

function RecentPosts() {
  const { recentSanityPosts: { posts } } = useStaticQuery(query)
  return (
    <div className='w-full bg-blue-50'>
      <div className='container px-4 md:px-0 m-auto flex flex-col items-start '>
        <div className='flex justify-between m-auto w-full text-left pt-5'>
          <span className='text-md sm:text-2xl'>Recent posts</span>
          <Link to='/blog' className='font-semibold text-blue-600'>View all</Link>

        </div>
        <div className='flex flex-col w-full lg:flex-row gap-5 py-5 justify-center'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentPosts

const query = graphql`
query RecentPost {
  recentSanityPosts: allSanityPost(limit: 3, sort: {_updatedAt: DESC}){
    posts: nodes {
      _updatedAt
      id
      title
      labels
      slug {
        current
      }
      excerpt(limit: 250)
      _rawContent
    }
  }
}
`