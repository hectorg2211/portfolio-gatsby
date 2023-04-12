import React from "react";
import Layout from "../../modules/Layout";
import { graphql } from "gatsby";
import FeaturedCard from "../../components/FeaturedCard";

function Projects({ data }) {
  return (
    <Layout>
      <main className='container m-auto px-5 xl:px-32 flex flex-col gap-10 pt-5 xl:pt-20'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-dark'>
          Projects
        </h1>
        {data.allSanityProject.projects.map((project, index) => (
          <div key={index} className='pb-4 border-b-gray-300 border-b'>
            <FeaturedCard project={project} />
          </div>
        ))}
      </main>
    </Layout>
  );
}

export default Projects;

export const Head = () => <title>Projects</title>

export const pageQuery = graphql`
  query SanityProjects {
    allSanityProject {
      projects: nodes {
        _key
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
  }
`;
