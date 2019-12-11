import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 400px;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000 !important;
`;

const Input = styled.input`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    background: #fff;
    border: 2px solid #dedede;
    padding: 14px 12px;
    box-sizing: border-box;

    &:focus{
        outline: 0;
    }
`;

const Option = styled.span`
    width: 99%;
    margin-left: .5%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    justify-content: center;
    font-weight: bold;
    color: rgba(44, 44, 44, 1);
    background: #fff;
    padding: 14px 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 13px;

    &:hover{
        color: rgb(0, 116, 232);
    }

    &:first-child{
        margin-top: -2px;
        border-radius: 0;
    }
    &:last-child{
        border-radius: 0 0 8px 8px;
    }
`;

export { Container, Input, Option };

