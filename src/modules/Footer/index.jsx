import React from 'react'
import { navigate } from 'gatsby-link'
import IconSocial from '../../components/IconSocial'

function Footer(props){
    return (
        <div className='w-full bg-white'>
            <div className='container m-auto p-10 flex flex-col items-start '>
                <div className='flex flex-col w-full lg:flex-row gap-5 p-5 justify-center'>
                <IconSocial socialLink='https://www.google.com' icon='fa-brands fa-square-facebook' size='2x'/>
                <IconSocial socialLink='/' icon='fa-brands fa-instagram' size='2x'/>
                <IconSocial socialLink='/' icon='fa-brands fa-twitter' size='2x'/>
                <IconSocial socialLink='/' icon='fa-brands fa-linkedin' size='2x'/>
                </div>
                <div className='flex justify-center align-top m-auto w-full px-5 pb-5'>
                    <span className='text-xs'>{props.text}</span>
                </div>
            </div>
        </div>


    )
}

export default Footer