import styled from "styled-components";

const Main = styled.main`
    width: 100%;
    height: calc(100vh - 65px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginWrapper = styled.div`
    position: relative;
    padding: 0 30px 45px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border: 1px solid ${({ error }) => error ? 'red' : 'transparent'};
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginHeader = styled.header`

    padding: 45px 0 45px 0;
    width: 100%;

    h1{
        width: 100%;
        text-align: center;
        color: ${props => props.theme.primaryGrey};
        font-weight: 400;
        font-size: 26px;
    }
`;

const Button = styled.button`
    width: 100%;
    min-height: 38px;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 16px;
    background: ${props => props.theme.secondarySystemColor};
    color: #fff;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    transition: 300ms;
    outline: none;

    &:hover{
        background: ${({ theme }) => theme.primarySystemColor};
    }
`;

const CreateAcc = styled.p`
    margin-top: 20px;
    font-size: 12px;
    color: ${props => props.theme.secondaryGrey};    

    a{
        color: ${props => props.theme.secondarySystemColor};
    }
`;

const Error = styled.p`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: red;
    font-weight: 500;
    display: ${({error}) => error ? 'block' : 'none'};
`;

export { Main, LoginWrapper, LoginForm, LoginHeader, Button, CreateAcc, Error }