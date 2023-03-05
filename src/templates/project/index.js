import { graphql } from "gatsby";
import React from "react";
import { isoToReadableDate } from "../../utils/iso-to-normal-date";
import Layout from "../../modules/layout";
import RichText from "../../components/RichText";

const Project = ({ data }) => {
  const { sanityProject } = data;
  return (
    <Layout>
      <main className='container m-auto px-5 xl:px-32 flex flex-col gap-10 pt-5 xl:pt-20'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-dark'>
          {sanityProject.title}
        </h1>

        <div className='flex items-center gap-5'>
          <span className='bg-primary rounded-full text-white font-semibold px-4'>
            {isoToReadableDate(sanityProject._createdAt)}
          </span>
          <span className='text-xl font-semibold'>
            {sanityProject.type.join(", ")}
          </span>
        </div>

        <RichText blockContent={sanityProject._rawText} />
      </main>
    </Layout>
  );
};

export default Project;

export const pageQuery = graphql`
  query SanityProject($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      _id
      _createdAt
      title
      slug {
        current
      }
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      year
      type
      _rawText
    }
  }
`;
