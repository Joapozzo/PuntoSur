import React from 'react'
import { FormContainer, ProductContainer, ProductsContainer, ProductsContainerStyled, ProductsWrapper } from './ProductsStyles'
import { Cateogories } from '../../components/Categories/Cateogories'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Section/Section'
import CardProduct from '../../components/CardProduct/CardProduct'
import BotonWhp from '../../components/BotonWhp/BotonWhp'

const Products = () => {
  return (
    <ProductsContainerStyled>
        <Cateogories/>
        <ProductsWrapper>
            <ProductsContainer>
                <Section>
                    <h2>Productos</h2>
                    <FormContainer>
                        <input type="text" placeholder='Busque su producto aquí'/>
                        <button>Buscar</button>
                    </FormContainer>
                </Section>
                <ProductContainer>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </ProductContainer>
            </ProductsContainer>
            <BotonWhp/>
        </ProductsWrapper>
    </ProductsContainerStyled>
  )
}

export default Products