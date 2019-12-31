import styled from "styled-components"

const SelectWrapper = styled.div`
    position: relative;
    grid-column: span ${props => props.span || 1};
    pointer-events: ${props => props.enabled ? 'all': 'none'};
    opacity: ${props => props.enabled ? 1 : .5};
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

export { SelectWrapper, Label }