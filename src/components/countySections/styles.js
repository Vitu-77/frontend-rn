import styled from 'styled-components';

const SectionWrapper = styled.section`
    width: 100%;
    padding: 20px 0;
`;

const SubSectionTitle = styled.h3`
    color: ${props => props.theme.primaryGrey};
    font-size: 21px;
    width: 100%;
    text-align: left;
    padding: 0px 0 5px 0;
    border-bottom: 1px solid ${props => props.theme.blackOpacity1};
    font-weight: 400;
`;

const SectionRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0 15px 0;
`;

const MayorWrapper = styled.div`
    margin-right: 35px;
    max-width: max-content;
    position: relative;

    h3{
        color: ${props => props.theme.primarySystemColor};
        font-size: 24px;
        font-weight: 400;
    }

    span{
        position: absolute;
        top: -40%;
        left: 0;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        color: ${props => props.theme.secondaryGrey};
    }
`;

const CouncilorWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    
    justify-content: flex-start;
    flex-flow: wrap;

    span{
        position: absolute;
        top: -10%;
        left: 0;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        color: ${props => props.theme.secondaryGrey};
    }
`;

const Councilor = styled.p`
    border: 1px solid ${props => props.theme.blackOpacity2};
    padding: 4px;
    font-size: 14px;
    margin: 5px 5px 5px 0;
    border-radius: 2px;
    color: ${props => props.theme.secondaryGrey};
    max-width: max-content;
    transition: 300ms;
`;

export {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    MayorWrapper,
    CouncilorWrapper,
    Councilor
}