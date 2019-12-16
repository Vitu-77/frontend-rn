import React, { useState } from 'react';
import PizzaChart from '../pizzaChart/index';
import BarChart from '../barChart/index';
import theme from '../../global/styles/theme';
import {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    SectionChartRow,
    ChartWrapper,
    ChartTitle,
    MayorWrapper,
    CouncilorWrapper,
    Councilor,
} from './styles';

const PoliticSection = (props) => {

    const [chartData, setChartData] = useState([
        { name: 'A', value: 200 },
        { name: 'B', value: 400 },
        { name: 'C', value: 600 },
        { name: 'D', value: 800 },
        { name: 'E', value: 1200 },
    ]);

    return (
        <SectionWrapper>
            {/* <SubSectionTitle>Comissão Política do Município</SubSectionTitle> */}
            <SectionRow>
                <MayorWrapper>
                    <span>Prefeito</span>
                    <h3>Atual Prefeito</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Vice Prefeito</span>
                    <h3>Vice Prefeito</h3>
                </MayorWrapper>
            </SectionRow>
            <SectionRow>
                <CouncilorWrapper>
                    <span>Vereadores</span>
                    <Councilor>Victor Silva</Councilor>
                    <Councilor>Vanderlei de Souva Abreu</Councilor>
                    <Councilor>Camargo de Lacerda</Councilor>
                    <Councilor>Victor Silva</Councilor>
                    <Councilor>Vanderlei de Souva Abreu</Councilor>
                    <Councilor>Camargo de Lacerda</Councilor>
                </CouncilorWrapper>
            </SectionRow>
            {/* <SubSectionTitle>Eleitorado do Município</SubSectionTitle> */}
            <SectionRow>
                <MayorWrapper>
                    <span>Eleitorado Total</span>
                    <h3>13.725</h3>
                </MayorWrapper>
                <MayorWrapper>
                    <span>Senso</span>
                    <h3>2019</h3>
                </MayorWrapper>
            </SectionRow>
            <SectionChartRow>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por faixa etária</ChartTitle>
                    <PizzaChart
                        data={chartData}
                        color={theme.ternarySystemColor}
                        hoverColor={theme.lastSystemColor}
                    />
                </ChartWrapper>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por faixa etária</ChartTitle>
                    <PizzaChart
                        data={chartData}
                        color={theme.secondarySystemColor}
                        hoverColor={theme.ternarySystemColor}
                    />
                </ChartWrapper>
                <ChartWrapper height={250} width={30}>
                    <ChartTitle>Divisão por faixa etária</ChartTitle>
                    <PizzaChart
                        data={chartData}
                        color={theme.ternarySystemColor}
                        hoverColor={theme.lastSystemColor}
                    />
                </ChartWrapper>
            </SectionChartRow>
            <SectionChartRow>
                <ChartWrapper height={350}>
                    <ChartTitle>Eleitorado nos últimos 5 anos</ChartTitle>
                    <BarChart 
                    data={chartData} 
                    color={theme.secondarySystemColor}
                    />
                </ChartWrapper>
                <ChartWrapper height={350}>
                    <ChartTitle>Eleitorado nos últimos 5 anos</ChartTitle>
                    <BarChart 
                    data={chartData} 
                    color={theme.secondarySystemColor}
                    />
                </ChartWrapper>
            </SectionChartRow>
        </SectionWrapper>
    )
}

export { PoliticSection }