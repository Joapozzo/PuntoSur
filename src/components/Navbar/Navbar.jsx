import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Logo, NavbarCartContainer, NavbarContainerStyled, NavbarItem, NavbarListContainer, NavbarListResponsive, NavbarListResponsiveContainer, NavbarWrapper } from './NavbarStyles';
//Icons
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToContact = () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (menuOpen) {
      handleSetMenuOpen();
    }
  };

  return (
    <>
      <AnimatePresence>
        <NavbarContainerStyled id='navbar'>
            <NavbarWrapper>
                <FaBars 
                onClick={handleSetMenuOpen}
                className='menuBars'/>
                <Logo to="/" onClick={scrollToTop}>PuntoSur</Logo>
                <NavbarListContainer>
                    <NavbarItem to="/" onClick={scrollToTop}>Inicio</NavbarItem>
                    <NavbarItem to="/productos" onClick={scrollToTop}>Productos</NavbarItem>
                    <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
                </NavbarListContainer>
                <NavbarCartContainer to="/checkout">
                    <IoMdCart/>
                </NavbarCartContainer>
            </NavbarWrapper>
        </NavbarContainerStyled>
        {
          menuOpen &&
          <NavbarListResponsiveContainer>
            <NavbarListResponsive>
                <NavbarItem to="/" onClick={() => { scrollToTop(); handleSetMenuOpen(); }}>Inicio</NavbarItem>
                <NavbarItem to="/productos" onClick={() => { scrollToTop(); handleSetMenuOpen(); }}>Productos</NavbarItem>
                <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
            </NavbarListResponsive>
          </NavbarListResponsiveContainer>
        }
      </AnimatePresence>
    </>
  );
};

export default Navbar;
