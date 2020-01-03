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

const ContentHeader = styled.header`
    width: 100%;
    padding: 30px 75px 10px 75px;
    border-bottom: ${props => `2px solid ${props.theme.blackOpacity1}`};
`;

const IncomeSourceName = styled.h1`
    color: ${props => props.theme.primaryGrey};
    font-size: 44px;
    font-weight: 400;
    margin-top: 20px;
`;

const KeyVal = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const Key = styled.p`
    font-size: 12px;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.secondaryGrey};
`;

const Value = styled.h3`
    color: ${({ theme }) => theme.primaryGrey};
    font-size: 24px;
    font-weight: 400;
    text-transform: capitalize;
`;

const ContentBody = styled.section`
    margin: 20px 0 0 0;
    padding: 0 75px;
    width: 100%;
`;

const SectionRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center !important;
    justify-content: flex-start;
    margin: 60px 0 0 0;
`;

const IncomeSourceDescription = styled.article`

    width: 100%;

    p{  
        color: ${props => props.theme.primaryGrey};
        font-size: 16px;
        font-weight: 400;
        text-transform: inherit;
        text-align: justify;

        &::first-letter{
            text-transform: uppercase;
        }
    }

    h4{
        width: 100% !important;
        font-size: 12px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};
        margin-bottom: 5px;
    }
`;

export {
    Main,
    ContentContainer,
    ContentHeader,
    IncomeSourceName,
    KeyVal, 
    Key,
    Value,
    ContentBody,
    SectionRow,
    IncomeSourceDescription
}