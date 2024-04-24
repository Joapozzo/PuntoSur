import React from 'react'
import { CardProductContainer, HomeContainerStyled, HomeWrapper, ViewMoreButton } from './HomeStyles'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import CardProduct from '../../components/CardProduct/CardProduct'
import Footer from '../../components/Footer/Footer'

const Home = () => {
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
            <ViewMoreButton to='/productos'>Ver mas</ViewMoreButton>
          </Section>
      </HomeWrapper>
    </HomeContainerStyled>
  )
}

export default Home