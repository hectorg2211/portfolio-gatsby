import React from 'react'
import Avatar from '../../components/Avatar'
import  Button  from '../../components/Button'

function Hero({module}) {
  return (
    <div className='container m-auto py-40 flex flex-col items-center md:items-start'>
      <div className='flex flex-col flex-col-reverse md:flex-row items-center gap-14 md:gap-40 mb-10 md:mb-0'>
        <div className='flex-[2_2_0%] flex flex-col gap-5 md:gap-10'>
          <h1 className='text-center md:text-start text-2xl md:text-3xl lg:text-5xl font-semibold text-dark'>{module?.title}</h1>
          <p className='text-dark text-justify md:text-start'>{module?.subtitle}</p>
        </div>

        <div className='flex-1 flex justify-end'>
          <Avatar imageSrc={module?.imageSrc}/>
        </div>
      </div>
      
      <Button label='Download Resume'/>
    </div>
  )
}

export default Hero