import styled from 'styled-components';

const AncorsList = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: max-content;
`;

const Ancor = styled.a`
    color: ${props => props.theme.secondaryGrey};
    font-size: 14px;
    text-decoration: none;
    transition: 300ms;
    margin-left: 3px;

    &:hover{
        cursor: pointer;
        color: ${props => props.theme.primarySystemColor};
    }

    &:first-child{
        margin: 0 !important;
    }

    &:last-child{
        pointer-events: none !important;
        color: ${props => props.theme.primaryGrey};
    }
`;

export { AncorsList, Ancor }