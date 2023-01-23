import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    
    margin-top: 40px;
`

export const LoginCard = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid #7B8FA1;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);

    text-align: center;
    padding: 20px;
`

export const LoginCardHeader = styled.h2`
    color: #434242;
    border-bottom: 1px solid #7B8FA1;
    padding-bottom: 10px;
    width: 80%;
    margin: auto;
`

export const LoginCardBody = styled.div`
    padding-top: 30px;

    a{
        text-decoration: none;
        color: #434242;
    }
`

export const Button = styled.button`
    outline: none;
    border: 0;
    margin: 10px auto;
    padding: 20px;
    font-size: 20px;
    border-radius: 3px;
    box-shadow: 0 7px 14px rgba(0,0,0,0.3);
    cursor: pointer;
    color: #ffffff;

    background-color: ${props => props.label === 'google' ? '#E26868' : '#0081C9'};
    display: block;
    width: 80%;

    transition: all .3s ease;

    &:active {
        box-shadow: none;
    }
`