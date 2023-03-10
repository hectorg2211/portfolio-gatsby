import React from "react"
import IconSocial from "../../components/IconSocial"

function Footer(props){
    return (
        <footer className='w-full bg-white'>
            <div className='container m-auto p-10 flex flex-col items-start '>
                <div className='flex w-full flex-row gap-5 p-5 justify-center'>
                <IconSocial classes='transition ease-in-out hover:text-primary hover:scale-150' socialLink='https://www.google.com' icon='fa-brands fa-square-facebook' size='2x'/>
                <IconSocial classes='transition ease-in-out hover:text-primary hover:scale-150' socialLink='/' icon='fa-brands fa-instagram' size='2x'/>
                <IconSocial classes='transition ease-in-out hover:text-primary hover:scale-150' socialLink='/' icon='fa-brands fa-twitter' size='2x'/>
                <IconSocial classes='transition ease-in-out hover:text-primary hover:scale-150' socialLink='/' icon='fa-brands fa-linkedin' size='2x'/>
                </div>
                <div className='flex justify-center align-top m-auto w-full px-5 pb-5'>
                    <span className='text-xs'>{props.text}</span>
                </div>
            </div>
        </footer>


    )
}

export default Footer