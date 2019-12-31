import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.blackOpacity2};
    padding: 4px;
    border-radius: 2px;    
    text-transform: capitalize;
    grid-column: span 1;    
`;

const Content = styled.p`
    font-size: 16px;
    color: ${props => props.theme.primaryGrey};
    text-align: center;
    font-weight: 400;
`;

const Image = styled.img`
    width: 10px;
    margin-right: 5px;
    cursor: pointer;
    position: relative;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > p:first-child{
        width: 100% !important;
        text-align: start !important;
        font-weight: 400 !important;
        text-transform: capitalize !important;
        font-size: 16px !important;
        margin-bottom: 5px !important;
        transition: 300ms !important;
        color: ${props => props.theme.primaryGrey} !important;
    }

    & > p:last-child{
        width: 100% !important;
        text-align: start !important;
        font-size: 12px !important;
        font-weight: 300 !important;
        color: ${props => props.theme.secondaryGrey} !important;
    }
`;

export { Wrapper, InnerWrapper, Content, Image }