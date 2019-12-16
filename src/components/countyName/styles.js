import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    max-width: max-content;
`;

const Name = styled.h1`
    font-size: 44px;
    font-weight: 400;
    color: ${props => props.theme.primaryGrey};
`;

const Capital = styled.span`
    display: ${props => props.display};
    cursor: default;
    text-transform: uppercase;
    font-size: 12px;   
    width: 100%;
    text-align: start;
    margin-bottom: -5px;
    font-weight: 500;
    color: ${props => props.theme.primarySystemColor};
`;

export { Wrapper, Name, Capital }