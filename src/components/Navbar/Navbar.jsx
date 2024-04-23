import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { NavbarCartContainer, NavbarContainerStyled, NavbarItem, NavbarListContainer, NavbarListResponsive, NavbarListResponsiveContainer, NavbarWrapper } from './NavbarStyles'
//Icons
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa6";



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <AnimatePresence>
        <NavbarContainerStyled>
            <NavbarWrapper>
                <FaBars 
                onClick={handleSetMenuOpen}
                className='menuBars'/>
                <h2>PuntoSur</h2>
                <NavbarListContainer>
                    <NavbarItem>Inicio</NavbarItem>
                    <NavbarItem>Productos</NavbarItem>
                    <NavbarItem>Contacto</NavbarItem>
                </NavbarListContainer>
                <NavbarCartContainer>
                    <IoMdCart/>
                </NavbarCartContainer>
            </NavbarWrapper>
        </NavbarContainerStyled>
        {
          menuOpen &&
          <NavbarListResponsiveContainer
          initial={{ translateX: -1000 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: -1000, opacity: 0 }}
          transition={{ type: "spring", damping: 27 }}
          key="menu-responsive"
          >
            <NavbarListResponsive>
                <NavbarItem>Inicio</NavbarItem>
                <NavbarItem>Productos</NavbarItem>
                <NavbarItem>Contacto</NavbarItem>
            </NavbarListResponsive>
        </NavbarListResponsiveContainer>
        }
      </AnimatePresence>
    </>
  )
}

export default Navbar