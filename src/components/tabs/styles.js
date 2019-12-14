import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.width || '100%'};
    max-width: ${props => props.width || '100%'};
    border: ${props => props.border || 'none'};
    border-top: ${props => props.borderTop || 'none'};
    border-bottom: ${props => props.borderBottom || 'none'};
    border-left: ${props => props.borderLeft || 'none'};
    border-right: ${props => props.borderRight || 'none'};
`;

const TabsList = styled.header`
    min-width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
    border: ${props => props.border || 'none'};
    border-bottom: ${props => props.borderBottom || '1px solid #dedede'};
    border-top: ${props => props.borderTop || 'none'};
    border-left: ${props => props.borderLeft || 'none'};
    border-right: ${props => props.borderRight || 'none'};
`;

const Tab = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.color || '#4c4c4c'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || 400};
    padding: ${props => props.padding || '15px 20px 5px 20px'};
    margin: ${props => props.gap || '0'};
    background: ${props => props.background || 'transparent'};
    transition: ${props => props.transition || '250ms'};
    cursor: pointer;
    
    &{
        :hover{
            color: ${props => props.hoverColor || '#0074e8'} !important;
            background: ${props => props.hoverBackground || 'transparent'};
        }
    }
`;

const Indicator = styled.div`
    position: absolute;
    top: calc(100% - ${props => props.height}px);
    left: ${props => `${props.left}px` || '0%'};
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px` || '2px'};
    background: ${props => props.color || '#0074e8'};
    transition: ${props => props.transition || '300ms'};
`;

const TabsPanels = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start !important;
    /* border: 1px solid red; */
    /* padding: 40px; */
    max-width: 100%;
    min-width: 100%;
    position: relative;
    box-sizing: border-box !important;

    &{
        > * {
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            /* background: #ccc; */
            margin: 0;
            padding: 20px 0;
            z-index: 10;
            text-align: center;
            /* border: 2px solid red; */
        }
    }
`;

export { Tabs, TabsList, Tab, TabsPanels, Indicator }; 