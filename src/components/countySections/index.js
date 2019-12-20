/* React Components */
import React, { useState } from 'react';
/* Components */
import PizzaChart from '../pizzaChart';
import BarChart from '../barChart';
import PieChart from '../pieChart';
/* Config/Global */
import theme from '../../global/styles/theme';
/* Util */
import { toMoneyFormat } from '../../util/stringHandler';
/* Styled Components */
import {
    SectionWrapper,
    SectionRow,
    SectionChartRow,
    ChartWrapper,
    ChartTitle,
    InfoWrapper,
    MultipleItensWrapper,
    Item,
    LargeItem,
    Source,
    CountyDescription
} from './styles';

const PoliticSection = ({ data }) => {

    const [votersPerAge] = useState(data.votersPerAge);
    const [votersPerSex] = useState(data.votersPerSex);
    const [votersPerSchooling] = useState(data.votersPerSchooling);
    const [votersAmountMunicipal] = useState(data.votersAmountMunicipal);
    const [votersAmountFederal] = useState(data.votersAmountFederal);

    return (
        <SectionWrapper>
            <SectionRow>
                <InfoWrapper>
                    <span>Prefeito</span>
                    <h3>{data?.currentMayor}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>Vice Prefeito</span>
                    <h3>{data?.currentViceMayor}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    <span>Vereadores</span>
                    {data?.councilors.map(councilor => (
                        <Item key={councilor}>{councilor}</Item>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow>
                <InfoWrapper>
                    <span>Eleitorado Total</span>
                    <h3>{data?.amountVoters.amount}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>Senso</span>
                    <h3>{data?.amountVoters.year}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionChartRow>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por sexo</ChartTitle>
                    <PieChart
                        color={theme.ternarySystemColor}
                        data={votersPerSex}
                        dataKey={Object.keys(votersPerSex[0])[1]}
                    />
                </ChartWrapper>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por faixa etária</ChartTitle>
                    <PizzaChart
                        color={theme.ternarySystemColor}
                        hoverColor={theme.lastSystemColor}
                        data={votersPerAge}
                        dataKey={Object.keys(votersPerAge[0])[1]}
                    />
                </ChartWrapper>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por nível de escolaridade</ChartTitle>
                    <PieChart
                        color={theme.ternarySystemColor}
                        data={votersPerSchooling}
                        dataKey={Object.keys(votersPerSchooling[0])[1]}
                    />
                </ChartWrapper>
            </SectionChartRow>
            <SectionChartRow>
                <ChartWrapper height={350}>
                    <ChartTitle>Eleitorado nas últimas 5 eleições (Municipal)</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={votersAmountMunicipal}
                        dataKey={Object.keys(votersAmountMunicipal[0])}
                    />
                </ChartWrapper>
                <ChartWrapper height={350}>
                    <ChartTitle>Eleitorado nas últimas 5 eleições (Federal)</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={votersAmountFederal}
                        dataKey={Object.keys(votersAmountFederal[0])}
                    />
                </ChartWrapper>
            </SectionChartRow>
            <SectionRow direction='column'>
                <Source>
                    * Dados populacionais extraídos de <a target='_blank' href='https://cidades.ibge.gov.br'>cidades.ibge.gov.br</a>
                </Source>
                <Source>
                    * Dados políticos extraídos de <a target='_blank' href='http://www.tse.jus.br/'>tse.jus.br</a>
                </Source>
            </SectionRow>
        </SectionWrapper>
    )
}

const EconomicSection = ({ data }) => {

    const [lastAnnualBillings] = useState(data?.lastAnnualBillings);
    const [lastPibs] = useState(data?.lastPibs);

    return (
        <SectionWrapper>
            <SectionRow>
                <InfoWrapper>
                    <span>Orçamento anual atual</span>
                    <h3>{toMoneyFormat(data?.annualBilling)}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>PIB per capta</span>
                    <h3>{toMoneyFormat(data?.pib)}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>IDHM</span>
                    <h3>{data?.idhm}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    {data.mainIncomeSources.length === 1
                        ? <span>Principal fonte de renda do município</span>
                        : <span>Principais fontes de renda do município</span>
                    }
                    {data.mainIncomeSources.map(incomeSource => (
                        <Item key={incomeSource}>
                            {incomeSource}
                        </Item>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    {data.mainEconomicEvents.length === 1
                        ? <span>Principal evento econômico do município</span>
                        : <span>Principais eventos econômicos do município</span>
                    }
                    {data.mainEconomicEvents.map(economicEvent => (
                        <Item key={economicEvent}>{economicEvent}</Item>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionChartRow>
                <ChartWrapper height={350} className='barChart'>
                    <ChartTitle>Receita orçamentária nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastAnnualBillings}
                        dataKey={Object.keys(lastAnnualBillings[0])}
                        format={true}
                    />
                </ChartWrapper>
                <ChartWrapper height={350} className='barChart'>
                    <ChartTitle>Pib per capta nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastPibs}
                        dataKey={Object.keys(lastPibs[0])}
                        format={true}
                    />
                </ChartWrapper>
            </SectionChartRow>
            <SectionRow direction='column'>
                <Source>
                    * Dados econômicos extraídos de <a target='_blank' href='https://cidades.ibge.gov.br'>cidades.ibge.gov.br</a>
                </Source>
            </SectionRow>
        </SectionWrapper>
    )
}

const CulturalSection = ({ data }) => {
    return (
        <SectionWrapper>
            <SectionRow>
                <CountyDescription>
                    <h4>Descição do Município</h4>
                    <p>{data?.countyDescription}</p>
                </CountyDescription>
            </SectionRow>
            <SectionRow>
                <InfoWrapper>
                    <span>Fundação da Cidade</span>
                    <h3>{data?.countyFundation}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>Santo Padroeiro</span>
                    <h3>{data?.countyPatronSaint}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    {data?.touristSpots.length === 1
                        ? <span>Principal Ponto Turístico</span>
                        : <span>Principais Pontos Turísticos</span>
                    }
                    {data?.touristSpots.map(touristSpot => (
                        <LargeItem isLink key={touristSpot}>
                            <p>{touristSpot.name}</p>
                            <p>{touristSpot.adress}</p>
                        </LargeItem>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    {data?.countyEvents.length === 1
                        ? <span>Principal Evento Cultual</span>
                        : <span>Principais Eventos Culturais</span>
                    }
                    {data?.countyEvents.map(countyEvent => (
                        <LargeItem isLink key={countyEvent}>
                            <p>{countyEvent.name}</p>
                            <p><span>Período: </span>{countyEvent.period}</p>
                        </LargeItem>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    <span>Teatros / Escolas de Arte</span>
                    {data?.culturalPlaces.map(culturalPlace => (
                        <LargeItem isLink key={culturalPlace}>
                            <p>{culturalPlace.name}</p>
                            <p>{culturalPlace.adress}</p>
                        </LargeItem>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow direction='column'>
                <Source>
                    * Dados culturais extraídos de <a target='_blank' href='https://www.google.com/search?newwindow=1&sxsrf=ACYBGNS7JRzlATtvaddvKQsBIWke00FQAw%3A1576691575396&ei=d2f6Xb30F8G45OUPs7iBgAc&q=Natal+RN&oq=Natal+RN&gs_l=psy-ab.3..35i39j0l9.13083.14430..15538...0.2..0.155.446.0j3......0....1..gws-wiz.......0i71j0i67j0i131i67j0i131.rUiFfhgeYuQ&ved=0ahUKEwj9i5bq4b_mAhVBHLkGHTNcAHAQ4dUDCAs&uact=5'>Google</a>
                </Source>
            </SectionRow>
        </SectionWrapper>
    )
}

export { PoliticSection, EconomicSection, CulturalSection }