import styled from "styled-components";

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding: 50px 0;
    width: 100%;
    max-width: 350px;
    gap: 20px;

    &:hover {
        border: 1px solid var(--blue-light);
        transition: all .2s ease-in;
    }
`

export const ProductImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgCustom = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`

export const ProductInfoContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-weight: 700;
        font-size: 25px;
        color: var(--gray-300);
    }
`
export const ProductFoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;

    &i,svg {
        color: var(--blue);
    }

    a {
        color: white;
        background-color: var(--blue);
        padding: 10px 35px;
        border-radius: 15px;

        &:hover {
            background-color: transparent;
            color: var(--blue);
            border: 0.5px solid var(--blue);
            transition: all 0.3s ease;
        }
    }
`
export const ProductQuantity = styled.div`
    display: flex;
    gap: 15px;
    color: var(--gray-300);
`
export const PriceOfferContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        color: var(--gray-300);
        font-size: 14px;
        text-decoration: line-through;
    }

    span {
        color: var(--gray-300);
        font-size: 18px;
        font-weight: 700;
    }
`
