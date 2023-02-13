import React from 'react'
import Avatar from '../../components/Avatar'
import  Button  from '../../components/Button'

function Hero(props) {
  return (
    <div className='container m-auto py-40 flex flex-col items-start'>
      <div className='flex items-center gap-40'>
        <div className='flex-[2_2_0%] flex flex-col gap-10'>
          <h1 className='text-5xl font-semibold text-dark'>Hi, I'm Hector, <br/>A Fullstack Developer</h1>
          <p className='text-dark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className='flex-1 flex justify-end'>
          <Avatar imageSrc='https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        </div>
      </div>
      
      <Button label='Download Resume'/>
    </div>
  )
}

export default Hero