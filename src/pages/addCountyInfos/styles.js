import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    min-height: calc(100vh - 65px);
    height: calc(100vh - 65px);
    padding: 35px 55px;
    background: #FFFFFF;
`;

const ContentContainer = styled.section`
    border-radius: 8px;
    width: 100%;
    min-height: 100%;
    box-shadow: ${props => `0 0 200px 1px ${props.theme.blackOpacity2}`};
    margin-bottom: 35px;
    padding-bottom: 35px;
`;

const Form = styled.form`
    margin: 20px 0 0 0;
    padding: 0 75px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 15px 10px;
`;

const ContentHeader = styled.header`
    width: 100%;
    padding: 30px 75px 10px 75px;
    border-bottom: ${props => `2px solid ${props.theme.blackOpacity1}`};
`;

const CountyName = styled.h1`
    color: ${props => props.theme.primaryGrey};
    font-size: 44px;
    font-weight: 400;
    margin-top: 20px;
`;

const Paragraph = styled.p`
    color: ${props => props.theme.secondaryGrey};
    font-size: 16px;
    margin-right: 0;
    font-weight: 300;
    margin: 0;

    a{
        color: ${props => props.theme.secondarySystemColor};
        transition: 300ms;
    }
`;

const SectionTitle = styled.h2`
    color: ${props => props.theme.primaryGrey};
    font-size: 22px;
    text-align: start;
    margin: 15px 0 5px 0;
    grid-column: span 4;
    font-weight: 400;

    &:first-child{
        margin-top: 0 !important;
    }
`;

const SubSectionTitle = styled.h3`
    color: ${props => props.theme.primaryGrey};
    font-size: 14px;
    text-transform: uppercase;
    text-align: start;
    /* border-bottom: 1px solid ${props => props.theme.blackOpacity1}; */
    
    grid-column: span 4;
    font-weight: 400;

    &:first-child{
        margin-top: 0 !important;
    }
`;

const MultipleItemsWrapper = styled.div`
    border-top: 1px solid ${props => props.theme.blackOpacity1};    
    border-bottom: 1px solid ${props => props.theme.blackOpacity1};    
    padding: 15px 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    grid-column: span 4;
    gap: 5px;
    margin: 5px 0 10px 0;

    span{
        margin-top: 5px;
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
        text-align: start;
        font-size: 14px;
        font-style: italic;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};

        grid-column: span 4;
    }
`;

const SubGrid = styled.div`
    grid-column: span ${props => props.span};
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

export {
    Main,
    ContentContainer,
    ContentHeader,
    Form,
    CountyName,
    Paragraph,
    SectionTitle,
    SubSectionTitle,
    MultipleItemsWrapper,    
    SubGrid
}