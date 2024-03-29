import React from "react";
import { graphql } from "gatsby";
import Layout from "../../modules/Layout";
import PostCard from "../../components/PostCard";

function Blog({ data }) {
  return (
    <Layout>
      <main className='container m-auto px-5 xl:px-32 flex flex-col xl:gap-10 pt-5 xl:pt-20'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-dark p-5'>
          Blog
        </h1>
        {data.allSanityPost.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </Layout>
  );
}

export default Blog;

export const Head = () => <title>Blog</title>

export const pageqQuery = graphql`
  query AllPosts {
    allSanityPost {
      posts: nodes {
        _updatedAt
        id
        slug{
          current
        }
        title
        labels
        _rawContent
        excerpt(limit: 250)
      }
    }
  }
`;
