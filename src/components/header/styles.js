import styled from 'styled-components';

const HeaderWrapper = styled.header`
    min-width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    background: ${props => props.theme.primarySystemColor};

    @media(max-width: 950px){padding: 0 30px}
    @media(max-width: 550px){padding: 0 15px}
`;

const Logo = styled.section`
    h1{
        font-size: 30px;
        color: ${props => props.theme.white};
        font-weight: 400;
        @media(max-width: 550px){ font-size: 20px }
    }
`;

const HeaderOptions = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

const User = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: default;

    h3{
        color: ${props => props.theme.white};
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        
        @media(max-width: 550px){ font-size: 14px }
    }
    span{
        color: ${props => props.theme.thirdGrey};
        font-size: 10px;
        margin: 0;

        @media(max-width: 550px){ font-size: 9px }
    }
`;

const Exit = styled.button`

    background: transparent;
    border-radius: 2px;
    padding: 5px;
    border: none;
    margin-top: -5px;
    margin-left: 25px;
    transition: 300ms;
    outline: none;
    cursor: pointer;

    @media(max-width: 550px){ padding: 0px }

    &:hover{
        background: ${props => props.theme.secondarySystemColor}
    }

    span{
        color: ${props => props.theme.white};
        font-weight: 400;
        font-size: 16px;
        margin: 0;

        @media(max-width: 550px){ display: none }
    }

    img{
        margin-left: 5px;
        width: 13px;

        @media(max-width: 550px){ width: 26px; padding: 5px !important; margin: 0;}
    }
`;

export {
    HeaderWrapper,
    Logo,
    HeaderOptions,
    User,
    Exit
}