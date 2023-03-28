import { graphql } from "gatsby";
import React from "react";
import { isoToReadableDate } from "../../utils/iso-to-normal-date";
import Layout from "../../modules/Layout";
import RichText from "../../components/RichText";

const Post = ({ data }) => {
  const { sanityPost } = data;
  return (
    <Layout>
      <main className='container m-auto px-5 xl:px-32 flex flex-col gap-10 pt-5 xl:pt-20'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-dark'>
          {sanityPost.title}
        </h1>

        <div className='flex items-center gap-5'>
          <span className='bg-primary rounded-full text-white font-semibold px-4'>
            {isoToReadableDate(sanityPost._createdAt)}
          </span>
          <span className='text-xl font-semibold'>
            {sanityPost.labels.join(", ")}
          </span>
        </div>

        <RichText blockContent={sanityPost._rawContent} />
      </main>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query SanityPost($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _id
      _createdAt
      title
      slug {
        current
      }
      labels
      _rawContent
    }
  }
`;
