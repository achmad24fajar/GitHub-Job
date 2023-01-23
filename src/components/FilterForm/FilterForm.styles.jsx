import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-top: 20px;
`

export const FormInputContainer = styled.div`
    flex-grow: 1;

    label {
        display: block;
        margin-bottom: 5px;
    }
`

export const FormInput = styled.input`
    outline: none;
    font-size: 17px;
    padding: 5px 2px;
    width: 90%;

    &::placeholder {
        font-size: 13px;
    }
`

export const FormCheckboxContainer = styled.div`
    margin-right: 25px;
    align-self: center;
    padding-top: 20px;
`

export const FormCheckbox = styled.input`
    margin-right: 5px;
`

export const ButtonSubmit = styled.button`
    outline: none;
    background: #0081B4;
    color: #ffffff;
    padding: 10px;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
    cursor: pointer;
`

export const FormButtonContainer = styled.div``