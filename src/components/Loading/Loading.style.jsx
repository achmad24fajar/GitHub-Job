import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgba(255,255,255,0.5);
`

export const Spinner = styled.div`
   width: 56px;
   height: 56px;
   border-radius: 50%;
   background: conic-gradient(#0000 10%,#0081b4);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
   animation: spinner-zp9dbg 1s infinite linear;

    @keyframes spinner-zp9dbg {
    to {
        transform: rotate(1turn);
    }
    }
`