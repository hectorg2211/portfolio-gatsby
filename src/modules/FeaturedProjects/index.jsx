import React from 'react'
import FeaturedCard from '../../components/FeaturedCard'

function FeaturedProjects({ projects }) {
  return (
    <div className='container m-auto flex flex-col gap-4'>{projects.map(project => <div className='pb-4 border-b-gray-300 border-b'>
      <FeaturedCard project={project}/></div>)}</div>
  )
}

export default FeaturedProjects