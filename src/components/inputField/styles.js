import styled from "styled-components";

const InputWrapper = styled.div`    
    position: relative;
    grid-column: span ${props => props.span || 1};
    pointer-events: ${props => props.enabled ? 'all' : 'none'};
    opacity: ${props => props.enabled ? 1 : .5};
`;

const Input = styled.input`
    width: 100%;
    min-height: 38px;
    border-radius: 4px;
    padding: 5px 10px;
    border: 1px solid ${props => props.theme.blackOpacity4};
    outline: none !important;
    font-size: 16px;
    color: ${props => props.theme.primaryGrey};

    &::placeholder{
        opacity: .4;
    }

    &:hover{
        border-color: ${props => props.theme.secondaryGrey};
    }

    &:focus{
        border-color: ${props => props.theme.secondarySystemColor};
        box-shadow: 0 0 0 1px ${props => props.theme.secondarySystemColor};
    }

    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number]{
        -moz-appearance:textfield;
    }  
`;

const Label = styled.label`
    position: absolute;
    top: 0%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    color: ${props => props.theme.primaryGrey};
    padding: 4px;
    font-size: 13px;
    background: #fff;
    pointer-events: none;
`;

export { InputWrapper, Input, Label }