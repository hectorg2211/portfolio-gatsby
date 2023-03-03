import React from 'react'
import FeaturedCard from '../../components/FeaturedCard'

function FeaturedProjects({ projects }) {
  return (
    <div className='container px-4 md:px-0 m-auto flex flex-col gap-4'>
      {projects.map((project,index) =>
        <div key={index} className='pb-4 border-b-gray-300 border-b'>
          <FeaturedCard project={project}/>
        </div>)
      }
    </div>
  )
}

export default FeaturedProjects