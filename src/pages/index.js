import * as React from 'react'
import Hero from '../modules/Hero'
import FeaturedProjects from '../modules/FeaturedProjects'
import RecentPosts from '../modules/RecentPosts'
import Footer from '../modules/Footer'
import Navbar from '../modules/Navbar'

const IndexPage = ({ modules }) => {
  console.log(modules)
  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-16'>
        {modules?.map((module, index) => {
            switch (module.type) {
              case 'Hero':
                return <Hero key={index} {...module} />
              case 'Featured':
                return <FeaturedProjects key={index} {...module} />
              case 'RecentPosts':
                return <RecentPosts key={index} {...module} />
              default:
                return null
            }
          }
        )}
        hello
      </main>
      <Footer text='Copyright ©2023 All rights reserved'/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
