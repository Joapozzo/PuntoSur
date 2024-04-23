import React from 'react'
import { HeroContainerStyled, HeroInfoContainer, HeroWrapper, StyledBackground } from './HeroStyles'
import HeroBackground from "../../assets/img/hero-img/4da3f42d4a05b5608f8ad65fda9158f0.jpg"

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroWrapper>
            <StyledBackground src={HeroBackground} alt="" />
            <HeroInfoContainer>
                <h1>Punto<span>Sur</span></h1>
                <p>Somos una tienda ubicada en la zona sur de Córdoba Capital donde nos enfocamos en satisfacer las necesidades del cliente. ¡No dudes en elegirnos!</p>
                <a href="">Ver Productos</a>
            </HeroInfoContainer>
        </HeroWrapper>
    </HeroContainerStyled>
  )
}

export default Hero