import * as React from 'react'
import Hero from '../modules/Hero'
import FeaturedProjects from '../modules/FeaturedProjects'
import RecentPosts from '../modules/RecentPosts'
import Footer from '../modules/Footer'
import { graphql } from 'gatsby'
import Layout from '../modules/Layout'

const IndexPage = ({ modules }) => {
  console.log(modules)
  return (
    <Layout>
      <main className='flex flex-col gap-16'>
        {/*{modules.map((module, index) => {*/}
        {/*    switch (module.type) {*/}
        {/*      case 'Hero':*/}
        {/*        return <Hero key={index} {...module} />*/}
        {/*      case 'Featured':*/}
        {/*        return <FeaturedProjects key={index} {...module} />*/}
        {/*      case 'RecentPosts':*/}
        {/*        return <RecentPosts key={index} {...module} />*/}
        {/*      default:*/}
        {/*        return null*/}
        {/*    }*/}
        {/*  }*/}
        {/*)}*/}
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

// export const pageQuery = graphql`
// `
