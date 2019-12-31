import styled from 'styled-components';

const AncorsList = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: max-content;
`;

const Ancor = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.secondaryGrey};
    font-size: 15px;
    text-decoration: none;
    transition: 300ms;
    margin: 0 3px 0 0;
    outline: none !important;

    &:hover{
        cursor: pointer;
        color: ${props => props.theme.primarySystemColor};
    }
`;

export { AncorsList, Ancor }