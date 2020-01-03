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

const HeaderTitle = styled.h1`
    color: ${props => props.theme.primaryGrey};
    font-size: 44px;
    font-weight: 400;
    margin-top: 20px;
`;

const ContentBody = styled.section`
    margin: 20px 0 0 0;
    padding: 0 75px;
    width: 100%;
`;

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 5px;
    padding-bottom: 20px;
    margin-bottom: 20px;

    &:first-child{
        border-bottom: 1px solid ${({ theme }) => theme.blackOpacity2};
    }

    span{
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
        text-align: start;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};

        grid-column: span 4;
    }
`;

const NewEntryForm = styled.div`
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    /* padding-bottom: ${({ showForm }) => showForm ? '50px' : '10px'}; */
    transition: 300ms;
`;

const Form = styled.form`
    width: 100%;
    position: absolute;
    left: 0;
    top: ${({ showForm }) => showForm ? 0 : '-200%'};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
    margin-bottom: 10px;
    transition: 300ms;

    z-index: ${({ showForm }) => showForm ? 1 : -10};
    pointer-events: ${({ showForm }) => showForm ? 'all' : 'none'};
    transition: 600ms;
    /* transition-delay: 300ms; */
`;

const ButtonsRow = styled.div`
    grid-column: span 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${({ showForm }) => showForm ? '120px' : 0};
    transition: 600ms;
`;

export {
    Main,
    ContentContainer,
    ContentHeader,
    HeaderTitle,
    ContentBody,
    Grid,
    NewEntryForm,
    Form,
    ButtonsRow
}