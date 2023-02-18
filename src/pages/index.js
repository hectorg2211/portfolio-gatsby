import * as React from 'react'
import Hero from '../modules/Hero'
import FeaturedProjects from '../modules/FeaturedProjects'
import RecentPosts from '../modules/RecentPosts'
import Footer from "../modules/Footer"

const IndexPage = ({ modules }) => {
  console.log(modules)
  return (
    <main>
      {modules.map((module, index) => {
          switch (module.type) {
            case 'Hero':
              return <Hero key={index} {...module} />
            case 'Featured':
              return <FeaturedProjects key={index} {...module} />
            default:
              return null
          }
        }
      )}
    <Hero />
    <RecentPosts title='Making a design system from scratch' date='12 Feb 2023' labels='Design, Pattern' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
    <Footer text='Copyright ©2023 All rights reserved' />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
