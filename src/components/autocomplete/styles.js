import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);

    z-index: 10000 !important;

    @media(max-width: 515px){
        top: 12%;
    }
`;

const Wrapper = styled.div`
    width: 500px;
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${props => props.roundBottom === 0 ? '8px' : '8px 8px 0 0'};
    box-shadow: 0px 0px 100px 10px rgba(52, 52, 168, 0.15);
    border-bottom: ${props => props.roundBottom === 0 ? 'none' : '1px solid #C4C4C4'};
    padding: 5px 0;

    @media(max-width: 485px){
        width: 80vw;
    }
`;

const Input = styled.input`
    width: 320px;
    padding: 10px 20px;
    border: none;
    font-size: 15px;
    font-weight: 300;
    color: #969696;

    &::placeholder{
        font-size: 15px;
        font-weight: 300;
        color: #DADADA !important;
    }

    &:focus{
        outline: 0;
    }

    @media(max-width: 485px){
        width: 180px;
    }
`;

const AutoCompleteAction = styled.button`
    background: #fff;
    display: ${props => props.hide ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    border: none;
    position: relative;
    justify-self: flex-end !important;

    &:focus{
        outline: 0 !important;
    }

    &:last-child{
        border-left: 1px solid #DADADA;
    }
`;

const ActionDescription = styled.span`
    opacity: ${props => props.hide ? '1' : '0'};
    pointer-events: none !important;
    position: absolute;
    width: max-content;
    font-size: 12px;
    padding: 5px;
    border-radius: 4px;
    background: #6d6d6d;
    color: #fff;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    transition: 300ms;
    z-index: 1000000000000;
`;

const Image = styled.img`
    cursor: pointer;
    background: transparent;
    border-radius: 44%;
    padding: 10px;
    margin: 0 5px;
    transition: 300ms;

    &:hover{
        background: rgba(205, 205, 205, 0.3);
    }
`;

const Option = styled.span`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    justify-content: center;
    color: #969696;
    background: #fff;
    padding-left: 40px;
    box-sizing: border-box;
    font-size: 15px;
    cursor: pointer;
    font-weight: 400;
    transition: 300ms;

    &:hover{
        color: #3434A8;
        background: rgba(245, 245, 245, 1);
    }

    &:first-child{
        margin-top: -2px;
        border-radius: 0;
    }
    &:last-child{
        border-radius: 0 0 8px 8px;
    }
`;

export {
    Container,
    Wrapper,
    Input,
    Option,
    AutoCompleteAction,
    ActionDescription,
    Image
};

