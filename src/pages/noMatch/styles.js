import styled from "styled-components";

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const NoMatchMessage = styled.h1`
    color: ${({ theme }) => theme.primaryGrey};
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 20px;
    z-index: 10;
`;

const Message404 = styled.p`
    font-size: 460px;
    color: ${({theme}) => theme.secondaryGrey};
    opacity: .05;
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

export { Main, NoMatchMessage, Message404 };