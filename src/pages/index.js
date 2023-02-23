import * as React from 'react'
import Hero from '../modules/Hero'
import FeaturedProjects from '../modules/FeaturedProjects'
import RecentPosts from '../modules/RecentPosts'
import Footer from '../modules/Footer'
import { graphql } from 'gatsby'
import Layout from '../modules/Layout'

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <main className='flex flex-col gap-16'>
        {data.sanityHomePage.modules.map((module) => {
            switch (module._type) {
              case 'hero':
                return <Hero key={module._key} {...module} />
              case 'featureProjects':
                return <FeaturedProjects key={module._key} {...module} />
              case 'RecentPosts':
                return <RecentPosts key={module._key} {...module} />
              default:
                return null
            }
          }
        )}
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
  query HomePage {
    sanityHomePage(_type: {eq: "homePage"}) {
      _type
      _createdAt
      _updatedAt
      modules {
        ...SanityHero
        ...SanityFeatureProjects
      }
    }
  }
`
