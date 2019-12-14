import React from 'react';

import {
    SectionWrapper,
    SubSectionTitle,
    SectionRow,
    MayorWrapper,
    CouncilorWrapper,
    Councilor
} from './styles';

const PoliticSection = (props) => {
    return (
        <SectionWrapper>
            <SubSectionTitle>Comissão Política do Município</SubSectionTitle>
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
            <SubSectionTitle>Eleitorado do Município</SubSectionTitle>
        </SectionWrapper>
    )
}

export { PoliticSection }