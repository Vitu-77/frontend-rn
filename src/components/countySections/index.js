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
    MayorWrapper,
    CouncilorWrapper,
    Councilor,
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
                <MayorWrapper>
                    <span>Prefeito</span>
                    <h3>{data?.currentMayor}</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Vice Prefeito</span>
                    <h3>{data?.currentViceMayor}</h3>
                </MayorWrapper>
            </SectionRow>
            <SectionRow>
                <CouncilorWrapper>
                    <span>Vereadores</span>
                    {data?.councilors.map(councilor => (
                        <Councilor key={councilor}>{councilor}</Councilor>
                    ))}
                </CouncilorWrapper>
            </SectionRow>
            {/* <SubSectionTitle>Eleitorado do Município</SubSectionTitle> */}
            <SectionRow>
                <MayorWrapper>
                    <span>Eleitorado Total</span>
                    <h3>{data?.amountVoters.amount}</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Senso</span>
                    <h3>{data?.amountVoters.year}</h3>
                </MayorWrapper>
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

    const [votersPerAge] = useState(data.votersPerAge);
    const [votersPerSex] = useState(data.votersPerSex);
    const [votersPerSchooling] = useState(data.votersPerSchooling);
    const [votersAmountMunicipal] = useState(data.votersAmountMunicipal);
    const [votersAmountFederal] = useState(data.votersAmountFederal);

    return (
        <SectionWrapper>
            {/* <SubSectionTitle>Comissão Política do Município</SubSectionTitle> */}
            <SectionRow>
                <MayorWrapper>
                    <span>Prefeito</span>
                    <h3>{data?.currentMayor}</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Vice Prefeito</span>
                    <h3>{data?.currentViceMayor}</h3>
                </MayorWrapper>
            </SectionRow>
            <SectionRow>
                <CouncilorWrapper>
                    <span>Vereadores</span>
                    {data?.councilors.map(councilor => (
                        <Councilor key={councilor}>{councilor}</Councilor>
                    ))}
                </CouncilorWrapper>
            </SectionRow>
            {/* <SubSectionTitle>Eleitorado do Município</SubSectionTitle> */}
            <SectionRow>
                <MayorWrapper>
                    <span>Eleitorado Total</span>
                    <h3>{data?.amountVoters.amount}</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Senso</span>
                    <h3>{data?.amountVoters.year}</h3>
                </MayorWrapper>
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

export { PoliticSection, EconomicSection }