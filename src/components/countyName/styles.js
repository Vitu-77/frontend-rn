import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    max-width: max-content;
`;

const Name = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: ${props => props.theme.primaryGrey};
`;

const Capital = styled.span`
    display: ${props => props.display};
    cursor: default;
    text-transform: uppercase;
    font-size: 11px;
    position: absolute;
    top: -10%;
    left: 1%;
    font-weight: 500;
    color: ${props => props.theme.primarySystemColor};
`;

export { Wrapper, Name, Capital }