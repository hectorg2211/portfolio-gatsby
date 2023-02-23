import React from 'react'
import Footer from '../Footer'

function Layout({children}) {
  return (
    <div>
      {children}
      <Footer text='Copyright ©2023 All rights reserved'/>
    </div>
  )
}

export default Layout