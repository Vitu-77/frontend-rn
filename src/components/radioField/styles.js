import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const Radio = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid ${({ theme }) => theme.blackOpacity4};
    cursor: pointer;
   
    &:hover{
        border: 1px solid ${({ theme }) => theme.secondaryGrey};
    }
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondarySystemColor};
    pointer-events: none;
    display: ${({ checked }) => checked ? 'block' : 'none'};
`;

const Label = styled.p`
    margin-left: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.primaryGrey};
    cursor: default;
`;

export { Wrapper, Radio, Label, Inner }