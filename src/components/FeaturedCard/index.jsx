import React from 'react'
// import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function FeaturedCard({ project }) {
  return (
    <div className='flex flex-col sm:flex-row  sm:h-52 gap-5'>
      <Link to={`/projects/${project.slug.current}`} className='rounded-lg overflow-hidden sm:flex-[1_1_0%]'>
        <GatsbyImage className='w-full h-full object-cover hover:scale-110 transition-all' alt={project.title} image={project.image.asset.gatsbyImageData} />
      </Link>

      <div className='flex flex-col gap-4 sm:flex-[2_2_0%]'>
        <h3 className='text-2xl sm:text-3xl font-semibold text-dark hover:text-primary transition-all'>
          <Link to={`/projects/${project.slug.current}`}>{project.title}
          </Link>
          </h3>
        <div className='flex items-center gap-5'>
          <span className='px-3 text-white bg-dark font-bold rounded-full'>{project.year}</span>
          <span className='text-gray-400 text-lg'>{project.type.join(', ')}</span>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default FeaturedCard