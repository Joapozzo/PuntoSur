import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <LayoutContainerStyled>
            {children}
        </LayoutContainerStyled>
    </>

  )
}

export default Layout