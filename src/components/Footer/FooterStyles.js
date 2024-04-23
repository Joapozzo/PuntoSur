import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    align-items: center;
    justify-content: center;
    padding: 30px 60px;
    gap: 20px;
`
export const FooterWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const NavFootContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;

    a {
        color: white;
    }

`
export const ContactoContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;
    h2 {
        font-size: 25px;
        font-weight: 600;
    }
`
export const ItemContacto = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const FooterBottom = styled.div`
    padding-top: 20px;
    border-top: 1px solid var(--blue-light);
    width: 100%;
    text-align: center;
    p {
        color: var(--blue-light);
    }
`