// Checkout.js
import React from 'react';
import { CheckoutContainerStyles, CheckoutWrapper, CheckoutTable, TableHeader, TableRow, TableCell, QuantityInput, DeleteButton, TotalCell, CheckoutData, ButtonContainer, ButtonPay, ButtonSearch, CheckProductsContainer, EnviromentTable, ContainerOutsideTable } from './ChekoutStyles';
import { VscError } from "react-icons/vsc";
import Section from '../../components/Section/Section';
import CardProduct from '../../components/CardProduct/CardProduct';

const Checkout = () => {
  return (
    <CheckoutContainerStyles>
      <CheckoutWrapper>
        <Section>
            <h2>Listado del pedido</h2>
            <CheckoutData>
                <EnviromentTable>
                <CheckoutTable>
                    <thead>
                        <tr>
                        <TableHeader>Producto</TableHeader>
                        <TableHeader>Precio</TableHeader>
                        <TableHeader>Cantidad</TableHeader>
                        <TableHeader>Subtotal</TableHeader>
                        <TableHeader>Eliminar</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>Coca-Cola</TableCell>
                            <TableCell>$2.50</TableCell>
                            <TableCell>
                                <QuantityInput type="number" defaultValue="2" min="1" />
                            </TableCell>
                            <TableCell>$5.00</TableCell>
                            <TableCell>
                                <DeleteButton> <VscError/> </DeleteButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Papas Lay's</TableCell>
                            <TableCell>$1.50</TableCell>
                            <TableCell>
                                <QuantityInput type="number" defaultValue="1" min="1" />
                            </TableCell>
                            <TableCell>$1.50</TableCell>
                            <TableCell>
                            <DeleteButton> <VscError/> </DeleteButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Coca-Cola</TableCell>
                            <TableCell>$2.50</TableCell>
                            <TableCell>
                                <QuantityInput type="number" defaultValue="2" min="1" />
                            </TableCell>
                            <TableCell>$5.00</TableCell>
                            <TableCell>
                            <DeleteButton> <VscError/> </DeleteButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Coca-Cola</TableCell>
                            <TableCell>$2.50</TableCell>
                            <TableCell>
                                <QuantityInput type="number" defaultValue="2" min="1" />
                            </TableCell>
                            <TableCell>$5.00</TableCell>
                            <TableCell>
                            <DeleteButton> <VscError/> </DeleteButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Coca-Cola</TableCell>
                            <TableCell>$2.50</TableCell>
                            <TableCell>
                                <QuantityInput type="number" defaultValue="2" min="1" />
                            </TableCell>
                            <TableCell>$5.00</TableCell>
                            <TableCell>
                            <DeleteButton> <VscError/> </DeleteButton>
                            </TableCell>
                        </TableRow>
                    </tbody>
                </CheckoutTable>
                </EnviromentTable>
                <ContainerOutsideTable>
                    <TotalCell>Total: $12.00</TotalCell>
                    <ButtonContainer>
                        <ButtonPay to='/pago'>Pagar</ButtonPay>
                        <ButtonSearch to='/productos'>Seguir comprando</ButtonSearch>
                    </ButtonContainer>
                </ContainerOutsideTable>
            </CheckoutData>
        </Section>
        </CheckoutWrapper>
        <Section>
            <h2>Productos Relacionados</h2>
            <CheckProductsContainer>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </CheckProductsContainer>
        </Section>
    </CheckoutContainerStyles>
  );
};

export default Checkout;
