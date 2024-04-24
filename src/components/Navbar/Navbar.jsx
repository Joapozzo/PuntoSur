import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { Logo, NavbarCartContainer, NavbarContainerStyled, NavbarItem, NavbarListContainer, NavbarListResponsive, NavbarListResponsiveContainer, NavbarWrapper } from './NavbarStyles'
//Icons
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)


  const handleSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };


  const scrollToContact = () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <AnimatePresence>
        <NavbarContainerStyled id='navbar'>
            <NavbarWrapper>
                <FaBars 
                onClick={handleSetMenuOpen}
                className='menuBars'/>
                <Logo to="/">PuntoSur</Logo>
                <NavbarListContainer>
                    <NavbarItem to="/">Inicio</NavbarItem>
                    <NavbarItem to="/productos">Productos</NavbarItem>
                    <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
                </NavbarListContainer>
                <NavbarCartContainer to="/checkout">
                    <IoMdCart/>
                </NavbarCartContainer>
            </NavbarWrapper>
        </NavbarContainerStyled>
        {
          menuOpen &&
          <NavbarListResponsiveContainer
          // initial={{ translateX: -200 }}
          // animate={{ translateX: 0 }}
          // exit={{ translateX: -500, opacity: 0 }}
          // transition={{ type: "spring", damping: 30 }}
          // key="menu-responsive"
          >
            <NavbarListResponsive>
                <NavbarItem>Inicio</NavbarItem>
                <NavbarItem>Productos</NavbarItem>
                <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
            </NavbarListResponsive>
        </NavbarListResponsiveContainer>
        }
      </AnimatePresence>
    </>
  )
}

export default Navbar