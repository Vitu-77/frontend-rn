import styled from 'styled-components';

const Btn = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    text-transform: uppercase;
    padding: 12px 15px;
    background: ${props => props.type === 'primary' ? props.theme.primarySystemColor : 'transparent'};
    color: ${props => props.type === 'primary' ? props.theme.white : props.theme.primarySystemColor};
    border: 2px solid ${props => props.theme.primarySystemColor};
    transition: 300ms;
    outline: 0;

    &:hover{
        background: ${props => props.theme.secondarySystemColor};
        color: ${props => props.theme.white};
        border-color: ${props => props.theme.secondarySystemColor};
        box-shadow: 0 4px 14px 0 #27279326;
    }
`;

export default Btn;