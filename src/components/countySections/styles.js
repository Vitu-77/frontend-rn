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
    flex-direction: ${props => props.direction || 'row'};
    align-items: center !important;
    justify-content: flex-start;
    margin: 30px 0 0 0;
`;

const SectionChartRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between !important;
    margin: 30px 0 0 0;

    @media(max-width: 1150px){
        flex-direction: column;
        justify-content: center;
        margin: 0;
    }

    .lodrxs{
        padding-top: 30px;
    }
`;

const ChartWrapper = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}%;
    position: relative;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    border-radius: 4px;
    transition: 300ms;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin-right: 10px;

    @media(max-width: 1150px){
        width: 100%;
        margin: 10px 0;
    }
`;

const ChartWrapperHeader = styled.div`

    padding: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid ${props => props.theme.blackOpacity1};

    h3{
        font-size: 14px;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};
        text-align: ${props => props.align || 'start'};
        text-transform: uppercase;
        transition: 300ms;
        margin-bottom: 15px;
    }
`;

const EditButton = styled.button`
    position: absolute;
    top: 60%;
    left: 1%;
    align-self: flex-start;
    font-size: 12px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.secondarySystemColor};
    border-radius: 2px;
    padding: 2px 4px;
    text-transform: uppercase;
    cursor: pointer !important;
    transition: 300ms;
    z-index: 100000000000;

    &:hover{
        color: ${({ theme }) => theme.primaryGrey};
        background: ${({ theme }) => theme.blackOpacity1};
    }
`;

const InfoWrapper = styled.article`
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

const MultipleItensWrapper = styled.article`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 5px;

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

const Item = styled.a`
    pointer-events: ${props => props.isLink ? 'all' : 'visible'};
    border: 1px solid ${props => props.theme.blackOpacity2};
    /* max-width: max-content; */
    text-decoration: none !important;
    padding: 4px;
    font-size: 16px;
    border-radius: 2px;
    color: ${props => props.theme.primaryGrey};
    font-weight: 400;
    text-transform: capitalize;
    flex: auto;
    transition: 300ms;
    grid-column: ${props => props.gridSpan || 'span 1'};

    &:hover{
        cursor: ${props => props.isLink ? 'pointer' : 'text'};
        color: ${props => props.isLink ? props.theme.secondarySystemColor : props.theme.primaryGrey};
    }
`;

const LargeItem = styled.a`
    pointer-events: ${props => props.isLink ? 'all' : 'visible'};
    border: 1px solid ${props => props.theme.blackOpacity2};
    text-decoration: none !important;
    padding: 6px 12px;
    border-radius: 2px;
    transition: 300ms;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    grid-column: ${props => props.gridSpan || 'span 1'};

    *{
        width: 100%;
        text-align: start !important;
    }

    p:first-child{
        color: ${props => props.theme.primaryGrey};
        font-weight: 400;
        text-transform: capitalize;
        font-size: 16px;
        transition: 300ms;
        margin-bottom: 5px;

        span{
            font-weight: 500;
        }
    }

    p:last-child{
        width: 100%;
        text-align: start;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 300;
        color: ${props => props.theme.secondaryGrey};
        
        span{
            font-weight: 500;
        }
    }

    &:hover{
        p:first-child{
            color: ${props => props.isLink ? props.theme.secondarySystemColor : props.theme.primaryGrey};
        }
        cursor: ${props => props.isLink ? 'pointer' : 'text'};
    }
`;

const Source = styled.p`
    font-size: 15px;
    font-style: italic;
    color: ${props => props.theme.secondaryGrey};
    margin-bottom: 10px;
    width: 100%;
    text-align: start !important;

    & > a {
        color: ${props => props.theme.secondarySystemColor};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.ternarySystemColor};
        }
    }
`;

const CountyDescription = styled.article`

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

const SeeAll = styled.div`
    grid-column: span 4;
    /* grid-row-start: 2; */
    background: transparent;
    /* border: none; */
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        color: ${({ theme }) => theme.secondarySystemColor};
        font-size: 12px;
        text-transform: uppercase;
    }
`;

export {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    SectionChartRow,
    ChartWrapper,
    ChartWrapperHeader,
    InfoWrapper,
    MultipleItensWrapper,
    Item,
    LargeItem,
    Source,
    CountyDescription,
    EditButton,
    SeeAll
}