import styled from "styled-components";

export const LayoutContainer = styled.div`
    
`

export const HeaderSection = styled.div`
    background-color: #0081B4;
    padding: 10px 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Brand = styled.h1`
    color: #ffffff;
`

export const ButtonLogout = styled.button`
    outline: none;
    border: 0;
    background: #ffffff;
    border-radius: 3px;
    padding: 0 10px;
    height: 30px;
    cursor: pointer;

    box-shadow: 0 5px 10px rgba(0,0,0,0.4);

    transition: all .3s ease;

    &:active {
        box-shadow: none;
    }
`

export const BodySection = styled.div`
    padding: 10px 100px;
`