import * as React from 'react'
import Hero from '../modules/Hero'
import FeaturedProjects from '../modules/FeaturedProjects'

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
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
