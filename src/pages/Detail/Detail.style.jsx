import styled from "styled-components";

export const DetailContainer = styled.div`
   margin-top: 20px;

   .back {
    text-decoration: none;
    color: #000;
    background: #ccc;
    padding: 7px;
    border-radius: 2px;
   }
`

export const DetailHeader = styled.div`
   padding: 15px 0;
`

export const DetailBody = styled.div`
   display: flex;
`

export const DetailDescription = styled.div`
   line-height: 20px;
   p {
    margin-bottom: 3px;
   }
`

export const DetailSidebar = styled.div`
   margin-left: 10px;
`

export const CardCompany = styled.div`
  border: 2px solid #ccc;
  padding: 5px;
  h4 {
    padding: 7px 3px;
    border-bottom: 1px solid #ccc;
  }
  img {
    width: 100%;
    height: 200px;
  }
`

export const ApplyCard = styled.div`
   border: 2px solid #ccc;
   margin-top: 20px;
   padding: 5px;
`