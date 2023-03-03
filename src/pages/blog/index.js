import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../modules/Layout'
import PostCard from '../../components/PostCard'

function Blog({data}) {
  return (
    <Layout>
      <main className='container m-auto desktop:px-32'>
        {data.allSanityPost.posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </main>
    </Layout>
  )
}

export default Blog

export const pageqQuery = graphql`
query AllPosts {
  allSanityPost {
     posts: nodes {
      _updatedAt
      id
      title
      labels
      _rawContent
    }
  }
}
`