import styled from 'styled-components';

const SectionWrapper = styled.section`
    width: 100%;
    margin-top: -20px;
    margin: 0;
    padding: 0;
`;

const SubSectionTitle = styled.h3`
    color: ${props => props.theme.primarySystemColor};
    font-size: 16px;
    width: 100%;
    text-align: left;
    padding: 30px 0 0 0;
    /* border-bottom: 1px solid ${props => props.theme.blackOpacity1};  */
    font-weight: 500;
`;

const SectionRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: flex-start;
    margin: 30px 0 0 0;
`;

const SectionChartRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between !important;
    margin: 30px 0 0 0;

    @media(max-width: 1085px){
        flex-direction: column;
        justify-content: center;
    }
`;

const ChartWrapper = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-radius: 4px;
    transition: 300ms;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    @media(max-width: 1085px){
        width: 100%;
        padding-top: 20px;
    }
    
    &:first-child{
        margin-right: 10px;
        
        @media(max-width: 1085px){
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
    &:last-child{
        margin-left: 10px;
        
        @media(max-width: 1085px){
            margin-left: 0;
            margin-top: 10px;    
        }
    }
`;

const ChartTitle = styled.h3`
    font-size: 14px;
    font-weight: 300;
    position: absolute;
    color: ${props => props.theme.secondaryGrey};
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    top: 0;
    padding: 2% 0 0 2%;
    transition: 300ms;
`;

const MayorWrapper = styled.article`
    margin-right: 40px;
    max-width: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h3{
        color: ${props => props.theme.primaryGrey};
        font-size: 24px;
        font-weight: 400;
        text-transform: capitalize;
    }

    span{
        font-size: 12px;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};
    }
`;

const CouncilorWrapper = styled.article`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    span{
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
        text-align: start;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};
    }
`;

const Councilor = styled.p`
    border: 1px solid ${props => props.theme.blackOpacity2};
    padding: 4px;
    font-size: 16px;
    margin: 5px 5px 5px 0;
    border-radius: 2px;
    color: ${props => props.theme.primaryGrey};
    font-weight: 400;
    text-transform: capitalize;
    flex: auto;
`;

export {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    SectionChartRow,
    ChartWrapper,
    ChartTitle,
    MayorWrapper,
    CouncilorWrapper,
    Councilor,
}