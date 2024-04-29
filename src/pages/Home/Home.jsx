import React from 'react'
import { CardProductContainer, HomeContainerStyled, HomeWrapper, ViewMoreButton } from './HomeStyles'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import CardProduct from '../../components/CardProduct/CardProduct'
import BotonWhp from '../../components/BotonWhp/BotonWhp'

const Home = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <HomeContainerStyled>
      <HomeWrapper>
          <Hero/>
          <Section>
            <h2>Ofertas</h2>
            <CardProductContainer>
              <CardProduct off/>
              <CardProduct off/>
              <CardProduct off/>
              <CardProduct off/>
              <CardProduct off/>
              <CardProduct off/>
            </CardProductContainer>
          </Section>
          <HeroSlider/>
          <Section>
            <h2>Productos descatados</h2>
            <CardProductContainer>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
            </CardProductContainer>
            <ViewMoreButton to='/productos' onClick={scrollToTop}>Ver mas</ViewMoreButton>
          </Section>
          <BotonWhp/>
      </HomeWrapper>
    </HomeContainerStyled>
  )
}

export default Home