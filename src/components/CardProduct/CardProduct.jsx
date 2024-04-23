import React from 'react'
import { ImgCustom, PriceOfferContainer, ProductContainerStyled, ProductFoot, ProductImgContainer, ProductInfoContainer, ProductQuantity } from './CardProductStlyes'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

import Coca from '../../assets/img/products-img/coca.png'

const CardProduct = ({off}) => {
  return (
    <ProductContainerStyled>
        <ProductImgContainer>
            <ImgCustom src={Coca} alt="" />
        </ProductImgContainer>
        <ProductInfoContainer>
            <h3>Coca cola - 500ml</h3>
            <PriceOfferContainer>
                {
                    off && (
                        <p>$1.500</p>
                    )
                }
                <span>$1.000</span>
            </PriceOfferContainer>
        <ProductFoot>
            <ProductQuantity>
                <AiOutlineMinus/>
                <span>0</span>
                <IoMdAdd/>
            </ProductQuantity>
            <a href="">Agregar</a>
        </ProductFoot>
        </ProductInfoContainer>
    </ProductContainerStyled>
  )
}

export default CardProduct