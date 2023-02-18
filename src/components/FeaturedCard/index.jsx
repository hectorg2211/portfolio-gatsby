import React from 'react'
// import { Link } from 'gatsby'

function FeaturedCard({ project }) {
  return (
    <div className='flex flex-col sm:flex-row h-[30rem] sm:h-52 gap-5'>
      <a href={project.slug} className='rounded-lg overflow-hidden sm:flex-[1_1_0%]'>
        <img
          className='w-full h-full object-cover'
          src={project.image}
          alt={project.title}/>
      </a>

      <div className='flex flex-col gap-4 sm:flex-[2_2_0%]'>
        <h3 className='text-3xl font-semibold text-dark'>{project.title}</h3>
        <div className='flex items-center gap-5'>
          <span className='px-3 text-white bg-dark font-bold rounded-full'>{project.year}</span>
          <span className='text-gray-400 text-lg'>{project.type}</span>
        </div>
        <p>{project.description}</p>
      </div>

    </div>
  )
}

export default FeaturedCard