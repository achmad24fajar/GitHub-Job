import styled from "styled-components";

export const JobsContainer = styled.div``

export const JobFilter = styled.div``

export const JobListsContainer = styled.div`
    margin-top: 20px;
`

export const JobListsHeader = styled.h2`
    font-weight: 400;
`

export const JobLists = styled.div`
    margin-top: 15px;
`

export const JobList = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 15px 5px;
    cursor: pointer;
`

export const JobListLeft = styled.div`
    h4{
        color: #0081B4;
    }

    .type {
        color: #FFB100;
    }
`

export const JobListRight = styled.div`
    text-align: right;
    span {
        display: block;
    }
    .location {
        font-weight: 500;
    }
`

export const JobLoadMore = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
`

export const ButtonLoadMore = styled.button`
    outline: none;
    width: 100%;
    background: #0081B4;
    border: 0;
    font-size: 20px;
    padding: 10px;
    color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    cursor: pointer;
    transition: all .3s ease;

    &:active {
        box-shadow: none;
    }
`