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
`;

const ContainerHeader = styled.header`
    width: 100%;
    padding: 30px 75px 10px 75px;
    border-bottom: ${props => `2px solid ${props.theme.blackOpacity1}`};
`;

const HeaderRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0 10px 0;

    &:last-child{
        margin: 0 !important;
    }
`;

const GeneralInfos = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: max-content;
`;

const GeneralInfo = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 0 0;
    
    span{

        text-transform: capitalize;

        &:first-child{
            font-size: 16px;
            color: ${props => props.theme.secondaryGrey};
            margin-right: 5px;
        }
        &:last-child{
            font-size: 16px;
            color: ${props => props.theme.primarySystemColor};
            margin-right: 0;
        }
    }
`;

const ContainerBody = styled.section`
    width: 100%;
    padding: 15px 75px;
`;

export {    
    Main,
    ContentContainer,
    ContainerHeader,
    HeaderRow,
    GeneralInfos,
    GeneralInfo,
    ContainerBody
}