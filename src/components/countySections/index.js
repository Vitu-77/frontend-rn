import React, { useState } from 'react';
import PizzaChart from '../pizzaChart/index';
import BarChart from '../barChart/index';
import FullFilledPizzaChart from '../fullFilledPizzaChart/index';

import theme from '../../global/styles/theme';
import {
    SectionWrapper,
    // SubSectionTitle,
    SectionRow,
    SectionChartRow,
    ChartWrapper,
    ChartTitle,
    InfoWrapper,
    MultipleItensWrapper,
    Item,
    ShortItem
} from './styles';

const PoliticSection = ({ data }) => {

    const [votersPerAge] = useState(data.votersPerAge);
    const [votersPerSex] = useState(data.votersPerSex);
    const [votersPerSchooling] = useState(data.votersPerSchooling);
    const [votersAmountMunicipal] = useState(data.votersAmountMunicipal);
    const [votersAmountFederal] = useState(data.votersAmountFederal);

    return (
        <SectionWrapper>
            {/* <SubSectionTitle>Comissão Política do Município</SubSectionTitle> */}
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
            {/* <SubSectionTitle>Eleitorado do Município</SubSectionTitle> */}
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
                    <FullFilledPizzaChart
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
                    <FullFilledPizzaChart
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
                    <h3>{data?.annualBilling}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>PIB per capta atual</span>
                    <h3>{data?.pib}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    {data.mainIncomeSources.length === 1
                        ? <span>Principal fonte de renda do município</span>
                        : <span>Principais fontes de renda do município</span>
                    }
                    {data.mainIncomeSources.map(incomeSource => (
                        <ShortItem
                            isLink
                            href={`${window.location.href}/${incomeSource}`}
                            key={incomeSource}>
                            {incomeSource}
                        </ShortItem>
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
                        <ShortItem key={economicEvent}>{economicEvent}</ShortItem>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionChartRow>
                <ChartWrapper height={350}>
                    <ChartTitle>Receita orçamentária nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastAnnualBillings}
                        dataKey={Object.keys(lastAnnualBillings[0])}
                    />
                </ChartWrapper>
                <ChartWrapper height={350}>
                    <ChartTitle>Pib per capta nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastPibs}
                        dataKey={Object.keys(lastPibs[0])}
                    />
                </ChartWrapper>
            </SectionChartRow>
        </SectionWrapper>
    )
}

const CulturalSection = ({ data }) => {

    const [lastAnnualBillings] = useState(data?.lastAnnualBillings);
    const [lastPibs] = useState(data?.lastPibs);

    return (
        <SectionWrapper>
            <SectionRow>
                <InfoWrapper>
                    <span>Orçamento anual atual</span>
                    <h3>{data?.annualBilling}</h3>
                </InfoWrapper>
                <InfoWrapper>
                    <span>PIB per capta atual</span>
                    <h3>{data?.pib}</h3>
                </InfoWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    <span>Principais fontes de renda do município</span>
                    {data.mainIncomeSources.map(incomeSource => (
                        <Item key={incomeSource}>{incomeSource}</Item>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionRow>
                <MultipleItensWrapper>
                    <span>Principais eventos econômicos do município</span>
                    {data.mainEconomicEvents.map(economicEvent => (
                        <Item key={economicEvent}>{economicEvent}</Item>
                    ))}
                </MultipleItensWrapper>
            </SectionRow>
            <SectionChartRow>
                <ChartWrapper height={350}>
                    <ChartTitle>Receita orçamentária nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastAnnualBillings}
                        dataKey={Object.keys(lastAnnualBillings[0])}
                    />
                </ChartWrapper>
                <ChartWrapper height={350}>
                    <ChartTitle>Pib per capta nos últimos 5 anos</ChartTitle>
                    <BarChart
                        color={theme.secondarySystemColor}
                        data={lastPibs}
                        dataKey={Object.keys(lastPibs[0])}
                    />
                </ChartWrapper>
            </SectionChartRow>
        </SectionWrapper>
    )
}

export { PoliticSection, EconomicSection, CulturalSection }