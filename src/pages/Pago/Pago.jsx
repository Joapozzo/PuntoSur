import React from 'react'
import { ButtonPay, FormLabel, InputsContainer, OptGroup, PagoContainerStyled, PagoForm, PagoFormContainer, PagoWrapper, Product, ProductContainer, ProductImg, ProductItems, ProductListWrapper, ProductsListContainer, Step, StepOne, StepThree, TextContainer } from './PagoStyles'
import { CiCircleCheck } from "react-icons/ci";
import CocaImg from "../../assets/img/products-img/coca.png"

const Pago = () => {
  return (
    <PagoContainerStyled>
        <PagoWrapper>
            <Step> 
                <StepOne> <CiCircleCheck/> Elegir productos </StepOne>
                <StepOne> <CiCircleCheck/> Agregar al carrito </StepOne> 
                <StepThree> <CiCircleCheck/> Confirmar pedido </StepThree>  
            </Step>
            <PagoFormContainer>
                <PagoForm>
                    <h3>Formulario de pago</h3>
                    <InputsContainer>
                        <FormLabel>
                            Nombre
                            <input type="text" />
                        </FormLabel>
                        <FormLabel>
                            Telefono
                            <input type="text" />
                        </FormLabel>
                        <FormLabel>
                            Email
                            <input type="text" />
                        </FormLabel>
                        <FormLabel>
                            Forma de entrega
                            <OptGroup>
                            <input type="radio" name='pago' value='delivery'/>
                            <p>Envío por delivery</p>
                            </OptGroup>
                            <OptGroup>
                            <input type="radio" name='pago' value='delivery'/>
                            <p>Retiro en el local</p>
                            </OptGroup>
                        </FormLabel>
                        <FormLabel>
                            Dirección
                            <input type="text" />
                        </FormLabel>
                        <FormLabel>
                            ¿Es un departamento?
                            <OptGroup>
                            <input type="radio" name='pago' value='departamento'/>
                            <p>Si</p>
                            </OptGroup>
                            <OptGroup>
                            <input type="radio" name='pago' value='departamento'/>
                            <p>No</p>
                            </OptGroup>
                        </FormLabel>
                        <FormLabel>
                            Metodo de pago
                            <OptGroup>
                            <input type="radio" name='pago' value='departamento'/>
                            <p>Efectivo</p>
                            </OptGroup>
                            <OptGroup>
                            <input type="radio" name='pago' value='departamento'/>
                            <p>Mercado pago / Tarjeta de crédito/débito</p>
                            </OptGroup>
                        </FormLabel>
                        <FormLabel>
                            Nota para el local
                            <input type="text" />
                        </FormLabel>
                    </InputsContainer>
                </PagoForm>
                <ProductsListContainer>
                    <h3>Listado del pedido</h3>
                    <ProductListWrapper>
                        <p>3 items</p>
                        <ProductContainer>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                            <Product>
                                <ProductImg>
                                    <img src={CocaImg} alt="coca" />
                                </ProductImg>
                                <ProductItems>
                                    <h4>$500.000</h4>
                                    <p>Coca cola 1L</p>
                                    <span>Cantidad: 1</span>
                                </ProductItems>
                            </Product>
                        </ProductContainer>
                    </ProductListWrapper>
                    <TextContainer>
                        <p>Subtotal</p>
                        <span>$2.100</span>
                    </TextContainer>
                    <TextContainer>
                        <p>Envío</p>
                        <span>$600</span>
                    </TextContainer>
                    <TextContainer>
                        <h3>Total</h3>
                        <h3>$2.700</h3>
                    </TextContainer>
                    <ButtonPay>Confirmar pedido</ButtonPay>
                </ProductsListContainer>
            </PagoFormContainer>
        </PagoWrapper>
    </PagoContainerStyled>
  )
}

export default Pago